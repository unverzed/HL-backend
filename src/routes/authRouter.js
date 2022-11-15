import { Router } from "express";
import { signup, login } from "../controllers/authController.js";
import schemaValidator from "../middlewares/schemaValidator.js";
import { loginSchema, signupSchema } from "../schemas/authSchema.js";

const authRouter = Router();

authRouter.post("/signup", schemaValidator(signupSchema), signup);
authRouter.post("/login", schemaValidator(loginSchema), login);

export default authRouter;



