import { Request, Response } from "express";

export class IdentifyPersonController {
    async handle(request: Request, response: Response) {
        return response.status(200).json();
    }
}
