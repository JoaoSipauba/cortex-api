import { Request, Response } from "express";

import { DeleteGroupUseCase } from "./DeleteGroupUseCase";

export class DeleteGroupController {
    async handle(request: Request, response: Response) {
        const { groupId } = request.query as {
            groupId: string;
        };

        const deleteGroupUseCase = new DeleteGroupUseCase();
        const result = deleteGroupUseCase.execute({ groupId });

        return response.status(200).send(result);
    }
}
