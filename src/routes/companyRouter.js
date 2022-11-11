import { Router } from "express";
import { insertCompany, getCompany } from "../controllers/companyController.js";
import schemaValidator from "../middlewares/schemaValidator.js";
import { companySchema } from "../schemas/companySchema.js";
import { tokenValidator } from "../middlewares/tokenValidate.js";

const companyRouter = Router();

companyRouter.post("/company", tokenValidator, schemaValidator(companySchema), insertCompany);
companyRouter.get("/company", tokenValidator, getCompany);
companyRouter.put("/company");
companyRouter.delete("/company");

export default companyRouter;
