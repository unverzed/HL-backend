import { Router } from "express";
import { signup } from "../controllers/authController.js";
import { schemaValidator } from "../middlewares/schemaValidator.js"

const authRouter = Router();

authRouter.post("/signup", schemaValidator, signup);
authRouter.post("/login");

export default authRouter;
