import prisma from "../../utils/prisma";
import { ILogin } from "./auth.interface";
import isCorrectPassword from "./../../utils/passwordChecker";
import { jwtHelpers } from "../../utils/jwtHelper";
import config from "../../config";
import { Secret } from "jsonwebtoken";

const userLogin = async (data: ILogin) => {
  const userData = await prisma.user.findUniqueOrThrow({
    where: {
      email: data.email,
    },
  });

  const passwordMatched = await isCorrectPassword(
    data.password,
    userData.password
  );

  if (!passwordMatched) {
    throw new Error("Invalid password");
  }

  const accessTokenData = {
    id: userData.id,
    email: userData.email,
  };

  const accessToken = jwtHelpers.generateToken(
    accessTokenData,
    config.jwt.secret as Secret,
    config.jwt.expiresIn as string
  );
  const returnData = {
    id: userData.id,
    name: userData.name,
    email: userData.email,
    token: accessToken,
  };
  return {
    returnData,
  };
};

export const authService = {
  userLogin,
};
