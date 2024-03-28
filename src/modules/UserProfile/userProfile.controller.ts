import { Request, Response } from "express";
import catchAsync from "../../utils/catchAsync";
import { IValidateUser } from "../../interface/validateUser";
import sendResponse from "../../utils/sendResponse";
import userProfileService from "./userProfile.service";
import httpStatus from "http-status";

const updateUserProfile = catchAsync(
  async (
    req: Request & {
      user?: IValidateUser;
    },
    res: Response
  ) => {
    const user = req.user;
    const result = await userProfileService.updateUserProfile(
      user?.id as string,
      req.body
    );
    sendResponse(res, {
      success: true,
      statusCode: httpStatus.OK,
      message: "User profile updated successfully",
      data: result,
    });
  }
);

export const userProfileController = {
  updateUserProfile,
};
