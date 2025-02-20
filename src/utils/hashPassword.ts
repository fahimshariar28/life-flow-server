import * as bcrypt from "bcrypt";
import config from "../config";

export const hashPassword = async (password: string): Promise<string> => {
  return await bcrypt.hash(password, 12);
};
