import httpStatus from "http-status";
import { ZodError } from "zod";
import { TErrorIssue, TErrorResponse } from "./error.types";

const handlerZodError = (err: ZodError): TErrorResponse => {
  const issues: TErrorIssue[] = err.issues.map((issue) => {
    return {
      code: issue.code,
      message: issue.message,
    };
  });

  return {
    statusCode: httpStatus.BAD_REQUEST,
    success: false,
    message: "Validation Error",
    errorDetails: {
      issues,
    },
  };
};

export default handlerZodError;
