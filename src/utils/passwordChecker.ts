import * as bcrypt from "bcrypt";

const isCorrectPassword = async (password: string, hashedPassword: string) => {
  return await bcrypt.compare(password, hashedPassword);
};

export default isCorrectPassword;
