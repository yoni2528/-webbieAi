import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import cors from "cors";
import openaiRouter from "./routers/openaiRouter.js";
import userRouter from "./routers/userRouter.js";
import websiteRouter from "./routers/websiteRouter.js";

import helmet from "helmet";
import mongoSanitize from "express-mongo-sanitize";
import xss from "xss-clean";

dotenv.config({ path: "./config.env" });
const app = express();

import errorHelper from "./utils/errorHelper.js";

app.use(
  cors({
    allowedOrigins: [
      "https://stately-sorbet-ddca2e.netlify.app/",
      "https://stately-sorbet-ddca2e.netlify.app",
      "http://127.0.0.1:5173",
    ],
  })
);

app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(mongoSanitize());
app.use(xss());

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
  res.send("running test number 3");
});

export default app;
