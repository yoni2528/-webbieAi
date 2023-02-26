import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import cors from "cors";
import openaiRouter from "./routers/openaiRouter.js";
import userRouter from "./routers/userRouter.js";
import websiteRouter from "./routers/websiteRouter.js";

dotenv.config({ path: "./config.env" });
const app = express();

import errorHelper from "./utils/errorHelper.js";

app.use(express.json());

app.use(cors());

app.use(morgan("combined"));

app.use("/app/v1/website-details", openaiRouter);
app.use("/app/v1/users", userRouter);
app.use("/app/v1/website", websiteRouter);

app.use(errorHelper);
app.use((err, req, res, next) => {
  res.status(err.status || 404).json({
    message: "faild",
    title: err.title,
    error: err.message,
  });
});

app.get("/", (req, res) => {
  res.send("running");
});

export default app;
