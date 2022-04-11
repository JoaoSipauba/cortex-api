import api from "../../../../service/azureApi";

interface IIdentifyPerson {
    imgUrl: string;

    groupId: string;
}

export class IdentifyPersonUseCase {
    async execute({ imgUrl, groupId }: IIdentifyPerson) {
        // should have valid image url

        if (!imgUrl) {
            throw new Error("imgUrl not found");
        }

        // should have groupIdentifier

        if (!groupId) {
            throw new Error("groupId not found");
        }

        // Azure should return faceId in /detect path

        const faceId = await this.sendUrlToAzure(imgUrl);

        // Azure should return personId in /identify path

        const personId = await this.matchesPersonWithFaceId(faceId, groupId);

        // Azure should return a list with personal datas

        const personData = await this.getPersonDataWithPersonId(
            groupId,

            personId
        );

        return { ...personData, imageURL: imgUrl };
    }

    private async sendUrlToAzure(imgUrl: string) {
        try {
            const result = await api.post(`/detect`, {
                url: imgUrl,
            });

            const { faceId } = result.data[0];

            return faceId;
        } catch (error) {
            throw new Error("Error while sending image url to azure");
        }
    }

    private async matchesPersonWithFaceId(faceId: string, groupId: string) {
        try {
            const result = await api.post(`/identify`, {
                largePersonGroupId: groupId,

                maxNumOfCandidatesReturned: 1,

                confidenceThreshold: 0.5,

                faceIds: [faceId],
            });

            const { candidates } = result.data[0];

            if (candidates.length === 0) {
                throw new Error("We cant find someone in our database");
            }

            return candidates[0].personId;
        } catch (error: any) {
            const errorMessage =
                error.message || error.response.data.error.message;

            throw new Error(errorMessage || "Error while matching person");
        }
    }

    private async getPersonDataWithPersonId(groupId: string, personid: string) {
        try {
            const result = await api.get(
                `/largepersongroups/${groupId}/persons/${personid}`
            );

            const { name, userData, persistedFaceIds } = result.data;

            console.log(result.data);

            const data = {
                cpf: name,

                nome: userData,

                fotos: persistedFaceIds,
            };

            return data;
        } catch (error) {
            throw new Error("Error getting person data");
        }
    }
}
