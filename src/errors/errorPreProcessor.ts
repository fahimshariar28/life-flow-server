import { ZodError } from "zod";
import GenericError from "./genericError";
import handlerGenericError from "./handleGenericError";
import handlerZodError from "./handleZodError";

const errorPreprocessor = (error: any) => {
  if (error instanceof ZodError) {
    return handlerZodError(error);
  } else if (error instanceof GenericError) {
    return handlerGenericError(error);
  } else {
    return {
      success: false,
      statusCode: error.statusCode || 500,
      message: error.message || "Internal Server Error",
    };
  }
};

export default errorPreprocessor;
