import { Request, Response } from "express";

import { TrainGroupUseCase } from "./TrainGroupUseCase";

export class TrainGroupController {
    async handle(request: Request, response: Response) {
        const { groupId } = request.query as {
            groupId: string;
        };

        const trainGroupUseCase = new TrainGroupUseCase();
        const result = trainGroupUseCase.execute({ groupId });

        return response.status(202).send(result);
    }
}
