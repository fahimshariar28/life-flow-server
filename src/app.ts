import express, { Application, NextFunction, Request, Response } from "express";
import cors from "cors";
import httpStatus from "http-status";

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

// Error handler
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  res.status(500).json({
    success: false,
    message: "INTERNAL SERVER ERROR!",
    error: {
      message: err.message,
    },
  });
});

// Not found handler
app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(httpStatus.NOT_FOUND).json({
    success: false,
    message: "API NOT FOUND!",
    error: {
      path: req.originalUrl,
      message: "Your requested path is not found!",
    },
  });
});

export default app;
