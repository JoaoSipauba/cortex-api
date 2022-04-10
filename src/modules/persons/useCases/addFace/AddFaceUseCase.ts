import api from "../../../../service/azureApi";

interface IAddFace {
    groupId: string;
    personId: string;
    imgUrl: string;
}
export class AddFaceUseCase {
    async execute({ groupId, personId, imgUrl }: IAddFace) {
        // should have groupIdentifier
        if (!groupId) {
            throw new Error("groupId not found");
        }

        // should have personId
        if (!personId) {
            throw new Error("personId not found");
        }

        // should have valid image url
        if (!imgUrl) {
            throw new Error("imgUrl not found");
        }

        // should add a new image to person
        try {
            const result = await api.post(
                `/largepersongroups/${groupId}/persons/${personId}/persistedfaces`,
                {
                    url: imgUrl,
                }
            );

            return result.data;
        } catch (error) {
            throw new Error("Erro ao enviar imagem");
        }
    }
}
