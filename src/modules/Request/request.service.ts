import { RequestStatus } from "@prisma/client";
import { IValidateUser } from "../../interface/validateUser";
import prisma from "../../utils/prisma";
import { IRequest } from "./request.interface";

const requestDonor = async (requestData: IRequest, user: IValidateUser) => {
  const data = { ...requestData, requesterId: user?.id };

  const result = await prisma.request.create({
    data,
    include: {
      donor: {
        include: {
          userProfile: true,
        },
      },
    },
  });

  return result;
};

const getRequests = async (user: IValidateUser) => {
  console.log(user);
  const result = await prisma.request.findMany({
    where: {
      donorId: user?.id,
    },
    include: {
      requester: true,
    },
  });

  return result;
};

const updateRequest = async (
  requestId: string,
  requestStatus: { status: string },
  user: IValidateUser
) => {
  const requestData = await prisma.request.findFirst({
    where: {
      id: requestId,
      donorId: user?.id,
    },
  });

  if (!requestData) {
    throw new Error("Request not found");
  }

  const result = await prisma.request.update({
    where: {
      id: requestId,
    },
    data: {
      requestStatus: requestStatus.status as RequestStatus,
    },
  });

  return result;
};

export const requestService = {
  requestDonor,
  getRequests,
  updateRequest,
};
