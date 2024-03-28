import { TErrorResponse } from "./error.types";
import JWTError from "./jwtError";

const handleJWTError = (err: JWTError): TErrorResponse => {
  if (err.stack) {
    delete err.stack;
  }

  return {
    success: false,
    statusCode: err.statusCode,
    message: err.message,
    errorDetails: "You are not authorized to access this route",
  };
};

export default handleJWTError;
