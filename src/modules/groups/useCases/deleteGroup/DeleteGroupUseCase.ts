import api from "../../../../service/azureApi";

interface IDeleteGroup {
    groupId: string;
}
export class DeleteGroupUseCase {
    async execute({ groupId }: IDeleteGroup) {
        // groupId should exists
        if (!groupId) {
            throw new Error("groupId not found");
        }

        // should remove a group
        try {
            const result = await api.delete(`/largepersongroups/${groupId}`);

            return result.data;
        } catch (error: any) {
            const errorMessage = error.response.data.error.message;

            throw new Error(errorMessage || "Erro ao remover grupo");
        }
    }
}
