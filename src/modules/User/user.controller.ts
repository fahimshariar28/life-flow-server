import { Request, Response } from "express";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { userService } from "./user.service";
import httpStatus from "http-status";
import { BloodType } from "./user.constant";
import { IValidateUser } from "../../interface/validateUser";

const createUser = catchAsync(async (req: Request, res: Response) => {
  const result = await userService.createUser(req.body);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "User created successfully",
    data: result,
  });
});

const getDonorList = catchAsync(async (req: Request, res: Response) => {
  const filters = {
    searchTerms: req.query.searchTerms as string,
    bloodType: BloodType[req.query.bloodType as keyof typeof BloodType],
    availability: (req.query.availability as string) === "true" ? true : false,
  };

  const options = {
    page: Number(req.query.page),
    limit: Number(req.query.limit),
    sortBy: req.query.sortBy as string,
    sortOrder: req.query.sortOrder as string,
  };

  const result = await userService.getDonorList(filters, options);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Donor list fetched successfully",
    meta: result.meta,
    data: result.donorList,
  });
});

const getUserProfile = catchAsync(
  async (
    req: Request & {
      user?: IValidateUser;
    },
    res: Response
  ) => {
    const result = await userService.getUserProfile(req.user as IValidateUser);
    sendResponse(res, {
      success: true,
      statusCode: httpStatus.OK,
      message: "User profile fetched successfully",
      data: result,
    });
  }
);

export const userController = {
  createUser,
  getDonorList,
  getUserProfile,
};
