import { Router } from "express";
import { insertResponsible } from "../controllers/responsibleController.js";
import { tokenValidator } from "../middlewares/tokenValidate.js";
import schemaValidator from "../middlewares/schemaValidator.js";
import { responsibleSchema } from "../schemas/responsibleSchema.js";

const responsibleRouter = Router();

responsibleRouter.post(
  "/company/:id",
  tokenValidator,
  schemaValidator(responsibleSchema),
  insertResponsible
);

export default responsibleRouter;
