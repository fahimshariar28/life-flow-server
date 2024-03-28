import { hashPassword } from "../../utils/hashPassword";
import prisma from "../../utils/prisma";
import { IUser } from "./user.interface";

const createUser = async (user: IUser) => {
  const hashedPassword = await hashPassword(user.password);

  const userData = {
    name: user.name,
    email: user.email,
    password: hashedPassword,
    bloodType: user.bloodType,
    location: user.location,
  };

  const userProfileData = {
    age: user.age,
    bio: user.bio,
    lastDonationDate: user.lastDonationDate,
  };

  const result = await prisma.$transaction(async (tx) => {
    const createdUser = await tx.user.create({
      data: userData,
    });

    const createdUserProfile = await tx.userProfile.create({
      data: {
        ...userProfileData,
        userId: createdUser.id,
      },
    });

    const { password, ...user } = createdUser;

    return {
      ...user,
      userProfile: createdUserProfile,
    };
  });
  return result;
};

export const userService = {
  createUser,
};
