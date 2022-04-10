import { Request, Response } from "express";

export class AddFaceController {
    async handle(request: Request, response: Response) {
        return response.status(201).json();
    }
}
