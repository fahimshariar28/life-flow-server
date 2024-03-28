import AppError from "../../errors/AppError";
import prisma from "../../utils/prisma";
import { IUserProfile } from "./userProfile.interface";

const updateUserProfile = async (
  userId: string,
  data: Partial<IUserProfile>
) => {
  const user = await prisma.user.findUnique({
    where: {
      id: userId,
    },
    include: {
      userProfile: true,
    },
  });

  if (!user) {
    throw new AppError(404, "User not found");
  }

  const result = await prisma.userProfile.update({
    where: {
      id: user.userProfile[0].id,
    },
    data,
  });

  return result;
};

export default {
  updateUserProfile,
};
