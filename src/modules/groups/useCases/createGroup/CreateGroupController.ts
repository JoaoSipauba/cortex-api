import { Request, Response } from "express";

export class CreateGroupController {
    async handle(request: Request, response: Response) {
        return response.status(201).json();
    }
}
