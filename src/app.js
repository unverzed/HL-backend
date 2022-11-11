import express from "express";
import "express-async-errors";
import cors from "cors";
import authRouter from "../src/routes/authRouter.js"

const app = express();
app.use(express.json());
app.use(cors());
app.use(authRouter);

export default app;