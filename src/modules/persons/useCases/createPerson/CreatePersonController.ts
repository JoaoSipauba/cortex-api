import { Request, Response } from "express";

export class CreatePersonController {
    async handle(request: Request, response: Response) {
        return response.status(201).json();
    }
}
