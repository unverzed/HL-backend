import { Router } from "express";
import { insertCompany, getCompany, getCompanyById, updateCompany } from "../controllers/companyController.js";
import schemaValidator from "../middlewares/schemaValidator.js";
import { companySchema } from "../schemas/companySchema.js";
import { tokenValidator } from "../middlewares/tokenValidate.js";

const companyRouter = Router();

companyRouter.post("/company", tokenValidator, schemaValidator(companySchema), insertCompany);
companyRouter.get("/company", tokenValidator, getCompany);
companyRouter.get("/company/:id", tokenValidator, getCompanyById);
companyRouter.put("/company/:id", tokenValidator, updateCompany);
companyRouter.delete("/company");

export default companyRouter;
