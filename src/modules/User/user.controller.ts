import { Request, Response } from "express";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { userService } from "./user.service";
import httpStatus from "http-status";

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
  const searchTerms = req.query.searchTerms as string;
  const options = {
    page: Number(req.query.page) || 1,
    limit: Number(req.query.limit) || 10,
    sortBy: req.query.sortBy as string,
    sortOrder: req.query.sortOrder as string,
  };
  const result = await userService.getDonorList(searchTerms, options);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Donor list fetched successfully",
    meta: result.meta,
    data: result.donorList,
  });
});

export const userController = {
  createUser,
  getDonorList,
};
