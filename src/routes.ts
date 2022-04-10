import { Router } from "express";

import { CreateGroupController } from "./modules/groups/useCases/createGroup/CreateGroupController";
import { DeleteGroupController } from "./modules/groups/useCases/deleteGroup/DeleteGroupController";
import { AddFaceController } from "./modules/persons/useCases/addFace/AddFaceController";
import { CreatePersonController } from "./modules/persons/useCases/createPerson/CreatePersonController";
import { IdentifyPersonController } from "./modules/persons/useCases/identifyPerson/IdentifyPersonController";

const routes = Router();

const createGroupController = new CreateGroupController();
const deleteGroupController = new DeleteGroupController();
const addFaceController = new AddFaceController();
const createPersonController = new CreatePersonController();
const identifyPersonController = new IdentifyPersonController();

routes.post("/group", createGroupController.handle);
routes.delete("/group", deleteGroupController.handle);
routes.post("/person", addFaceController.handle);
routes.post("/person/face", createPersonController.handle);
routes.get("/person/identify", identifyPersonController.handle);

export { routes };
