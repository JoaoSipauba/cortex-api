import { Request, Response } from "express";

import { IdentifyPersonUseCase } from "./IdentifyPersonUseCase";

export class IdentifyPersonController {
    async handle(request: Request, response: Response) {
        const imgUrl = request.file.location;
        const { groupId } = request.query as {
            groupId: string;
        };

        if (!imgUrl) {
            throw new Error("Error while uploading image");
        }
        const identifyPersonUseCase = new IdentifyPersonUseCase();
        const result = await identifyPersonUseCase.execute({
            imgUrl,
            groupId,
        });

        return response.status(200).json(result);
    }
}
