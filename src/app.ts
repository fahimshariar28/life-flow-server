import express, { Application, NextFunction, Request, Response } from "express";
import cors from "cors";
import httpStatus from "http-status";
import router from "./routes";
import globalErrorHandler from "./middlewares/globalErrorHandler";
import notFound from "./errors/notFound";

const app: Application = express();
app.use(cors());

//parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.get("/", (req: Request, res: Response) => {
  res.send({
    Message: "Welcome to the Life Flow!",
  });
});

app.use("/api", router);

// Error handler
app.use(globalErrorHandler);

// Not found handler
app.use(notFound);

export default app;
