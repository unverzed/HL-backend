import { Router } from "express";
import { sendPlaces } from "../controllers/placesController.js";
import schemaValidator from "../middlewares/schemaValidator.js";
import { tokenValidator } from "../middlewares/tokenValidate.js";
import { placesSchema } from "../schemas/placesSchema.js";

const placesRouter = Router();

placesRouter.post(
  "/places/:id",
  tokenValidator,
  schemaValidator(placesSchema),
  sendPlaces
);

export default placesRouter;
