import express from "express";
import "express-async-errors";
import cors from "cors";
import authRouter from "../src/routes/authRouter.js";
import companyRouter from "../src/routes/companyRouter.js";
import responsibleRouter from "../src/routes/responsibleRouter.js";
import errorHandlerMiddleware from "./middlewares/errorHandlerMiddleware.js";

const app = express();
app.use(express.json());
app.use(cors());
app.use(authRouter);
app.use(companyRouter);
app.use(responsibleRouter);
app.use(errorHandlerMiddleware);

export default app;