import api from "../../../../service/azureApi";

interface ITrainGroup {
    groupId: string;
}
export class TrainGroupUseCase {
    async execute({ groupId }: ITrainGroup) {
        // groupId should exists
        if (!groupId) {
            throw new Error("groupId not found");
        }

        // should remove a group
        try {
            const result = await api.post(
                `/largepersongroups/${groupId}/train`
            );

            return result.data;
        } catch (error: any) {
            const errorMessage = error.response.data.error.message;

            throw new Error(errorMessage || "Erro ao treinar grupo");
        }
    }
}
