import { Router } from "express";
import { insertCompany } from "../controllers/companyController.js";
import schemaValidator from "../middlewares/schemaValidator.js";
import { companySchema } from "../schemas/companySchema.js";
import { tokenValidator } from "../middlewares/tokenValidate.js";

const companyRouter = Router();

companyRouter.post("/company", tokenValidator, schemaValidator(companySchema), insertCompany);

export default companyRouter;
