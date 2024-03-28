import { TErrorIssue, TErrorResponse } from "./error.types";
import GenericError from "./genericError";

const handlerGenericError = (err: GenericError): TErrorResponse => {
  let errorMessage = "";
  if (err.stack) {
    errorMessage = err.stack.split(":")[1].split("\n")[0].trim();
  }
  const issues: TErrorIssue[] = [
    {
      path: "",
      message: err.message,
      errorMessage: errorMessage,
    },
  ];

  return {
    success: false,
    statusCode: err.statusCode,
    message: "Generic Error",
    errorDetails: {
      issues,
    },
  };
};

export default handlerGenericError;
