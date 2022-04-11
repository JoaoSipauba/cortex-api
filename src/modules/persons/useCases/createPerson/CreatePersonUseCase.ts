import api from "../../../../service/azureApi";

interface ICreatePerson {
    groupId: string;
    cpf: string;
    name: string;
}
export class CreatePersonUseCase {
    async execute({ groupId, cpf, name }: ICreatePerson) {
        // should have groupIdentifier
        if (!groupId) {
            throw new Error("groupId not found");
        }

        // should have cpf
        if (!cpf) {
            throw new Error("cpf not found");
        }

        // should have name
        if (!name) {
            throw new Error("name not found");
        }

        // should create a new person
        try {
            const result = await api.post(
                `/largepersongroups/${groupId}/persons`,
                {
                    name: cpf,
                    userData: name,
                }
            );

            return result.data;
        } catch (error) {
            throw new Error("Erro ao criar pessoa");
        }
    }
}
