import { NextFunction, Request, Response } from "express";
import httpStatus from "http-status";

const notFound = (req: Request, res: Response, next: NextFunction) => {
  res.status(httpStatus.NOT_FOUND).json({
    status: httpStatus.NOT_FOUND,
    success: false,
    message: "API NOT FOUND!",
    errorDetails: {
      path: req.originalUrl,
      message: "Your requested path is not found!",
    },
  });
};

export default notFound;
