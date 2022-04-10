import { Request, Response } from "express";

import { CreateGroupUseCase } from "./CreateGroupUseCase";

export class CreateGroupController {
    async handle(request: Request, response: Response) {
        const { groupId } = request.body;

        const createGroupUseCase = new CreateGroupUseCase();
        const result = await createGroupUseCase.execute({ groupId });

        return response.status(201).send(result);
    }
}
