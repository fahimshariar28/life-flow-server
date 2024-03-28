import { TErrorIssue } from "./error.types";

class GenericError extends Error {
  public statusCode: number;
  public errorMessage?: string;
  public issues?: TErrorIssue[];

  constructor(code: number, message: string) {
    super(message);
    this.statusCode = code;
  }
}

export default GenericError;
