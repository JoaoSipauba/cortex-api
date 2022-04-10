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
        const personId = await this.matchesPersonWithFaceId(faceId);

        // Azure should return a list with personal datas
        const personData = await this.getPersonDataWithPersonId(personId);

        return personData;
    }

    private async sendUrlToAzure(imgUrl: string) {
        const faceId = "";

        return faceId;
    }

    private async matchesPersonWithFaceId(faceId: string) {
        const personId = "";

        return personId;
    }

    private async getPersonDataWithPersonId(personId: string) {
        const data = "";

        return data;
    }
}
