import { NextFunction, Request, Response } from "express";
import { TErrorResponse } from "../errors/error.types";
import errorPreprocessor from "../errors/errorPreProcessor";

const globalErrorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let errorResponse: TErrorResponse = {
    statusCode: err.statusCode || 500,
    success: err.status,
    message: err.message || "Internal Server Error",
    errorDetails: err.errorDetails || {},
  };

  const processedError = errorPreprocessor(err);
  if (processedError) {
    errorResponse = processedError;
  } else {
    errorResponse = {
      statusCode: 500,
      success: false,
      message: "Internal Server Error",
      errorDetails: {},
    };
  }

  res.status(errorResponse.statusCode).json({
    statusCode: errorResponse.statusCode || 500,
    success: errorResponse.success,
    message: errorResponse.message || "Server Error",
    errorDetails: errorResponse.errorDetails,
    stack: err.stack || "",
  });
};

export default globalErrorHandler;
