import { Request, Response } from "express";

import { CreatePersonUseCase } from "./CreatePersonUseCase";

export class CreatePersonController {
    async handle(request: Request, response: Response) {
        const { groupId, name, cpf } = request.body;

        const createPersonUseCase = new CreatePersonUseCase();
        const result = await createPersonUseCase.execute({
            groupId,
            name,
            cpf,
        });

        return response.status(201).json(result);
    }
}
