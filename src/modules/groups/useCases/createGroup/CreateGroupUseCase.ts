import api from "../../../../service/azureApi";

interface ICreateGroup {
    groupId: string;
}
export class CreateGroupUseCase {
    async execute({ groupId }: ICreateGroup) {
        // should have identifier
        if (!groupId) {
            throw new Error("groupId not found");
        }

        // should create a new group
        try {
            const result = await api.put(`/largepersongroups/${groupId}`, {
                name: groupId,
                recognitionModel: "recognition_01",
            });

            return result.data;
        } catch (error: any) {
            const errorMessage = error.response.data.error.message;

            throw new Error(errorMessage || "Erro ao criar grupo");
        }
    }
}
