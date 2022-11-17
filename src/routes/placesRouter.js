import { Router } from "express";
import { sendPlaces, allPlaces, deletePlace } from "../controllers/placesController.js";
import schemaValidator from "../middlewares/schemaValidator.js";
import { tokenValidator } from "../middlewares/tokenValidate.js";
import { placesSchema } from "../schemas/placesSchema.js";

const placesRouter = Router();

placesRouter.post(
  "/places/:id/responsibles/:id2",
  tokenValidator,
  schemaValidator(placesSchema),
  sendPlaces
);

placesRouter.get("/places/:id", tokenValidator, allPlaces);
placesRouter.delete("/places/:id", tokenValidator, deletePlace);

export default placesRouter;
