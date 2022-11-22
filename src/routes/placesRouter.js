import { Router } from "express";
import {
  sendPlaces,
  onePlace,
  deletePlace,
  getAllPlaces,
  updatePlaces,
} from "../controllers/placesController.js";
import schemaValidator from "../middlewares/schemaValidator.js";
import { tokenValidator } from "../middlewares/tokenValidate.js";
import { placeSchema } from "../schemas/placesSchema.js";

const placesRouter = Router();

placesRouter.post(
  "/places/:id/responsibles/:id2",
  tokenValidator,
  schemaValidator(placeSchema),
  sendPlaces
);

placesRouter.get("/places/:id", tokenValidator, onePlace);
placesRouter.get("/allplaces/:id", tokenValidator, getAllPlaces);
placesRouter.delete("/places/:id", tokenValidator, deletePlace);
placesRouter.put("/places/:id", tokenValidator, updatePlaces);

export default placesRouter;
