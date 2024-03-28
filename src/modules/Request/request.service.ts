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

export const requestService = {
  requestDonor,
};
