import { Request, Response } from "express";

import { AddFaceUseCase } from "./AddFaceUseCase";

export class AddFaceController {
    async handle(request: Request, response: Response) {
        const { groupId, personId, imgUrl } = request.body;

        const addFaceUseCase = new AddFaceUseCase();

        const result = await addFaceUseCase.execute({
            groupId,
            personId,
            imgUrl,
        });

        return response.status(201).json(result);
    }
}
