import { NextFunction, Request, Response } from "express";
import config from "../config";
import { Secret } from "jsonwebtoken";
import { jwtHelpers } from "../utils/jwtHelper";
import prisma from "./../utils/prisma";
import AppError from "../errors/AppError";

const authHelp = () => {
  return async (
    req: Request & { user?: any },
    res: Response,
    next: NextFunction
  ) => {
    try {
      const token = req.headers.authorization;

      if (!token) {
        throw new AppError(401, "Unauthorized. Please login to continue.");
      }

      const verifiedUser = jwtHelpers.verifyToken(
        token,
        config.jwt.secret as Secret
      );

      const user = await prisma.user.findUnique({
        where: {
          id: verifiedUser.id,
        },
      });

      if (!user) {
        throw new AppError(401, "Unauthorized. Please login to continue.");
      }

      req.user = verifiedUser;

      next();
    } catch (err) {
      next(err);
    }
  };
};

export default authHelp;
