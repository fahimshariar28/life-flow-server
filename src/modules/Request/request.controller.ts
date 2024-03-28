import { Request, Response } from "express";
import catchAsync from "../../utils/catchAsync";
import { requestService } from "./request.service";
import sendResponse from "../../utils/sendResponse";
import httpStatus from "http-status";
import { IValidateUser } from "../../interface/validateUser";

const requestDonor = catchAsync(
  async (
    req: Request & {
      user?: IValidateUser;
    },
    res: Response
  ) => {
    const result = await requestService.requestDonor(
      req.body,
      req.user as IValidateUser
    );
    sendResponse(res, {
      success: true,
      statusCode: httpStatus.CREATED,
      message: "Request sent successfully",
      data: result,
    });
  }
);

const getRequests = catchAsync(
  async (
    req: Request & {
      user?: IValidateUser;
    },
    res: Response
  ) => {
    const result = await requestService.getRequests(req.user as IValidateUser);
    sendResponse(res, {
      success: true,
      statusCode: httpStatus.OK,
      message: "Requests fetched successfully",
      data: result,
    });
  }
);

export const requestController = {
  requestDonor,
  getRequests,
};
