import { hashPassword } from "../../utils/hashPassword";
import { paginateCalculation } from "../../utils/paginateCalculation";
import prisma from "../../utils/prisma";
import { IUser } from "./user.interface";
import { searchAbleFields } from "./user.constant";
import { Prisma } from "@prisma/client";

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

const getDonorList = async (
  searchTerms: string,
  options: {
    page: number;
    limit: number;
    sortBy: string;
    sortOrder: string;
  }
) => {
  const { page, limit, skip, sortBy, sortOrder } = paginateCalculation(options);

  const andConditions: Prisma.UserWhereInput[] = [];

  if (searchTerms) {
    andConditions.push({
      OR: searchAbleFields.map((field) => ({
        [field]: {
          contains: searchTerms,
          mode: "insensitive",
        },
      })),
    });
  }

  const donorList = await prisma.user.findMany({
    where: {
      AND: andConditions,
    },
    select: {
      id: true,
      name: true,
      email: true,
      bloodType: true,
      location: true,
      availability: true,
      createdAt: true,
      updatedAt: true,
      userProfile: {
        select: {
          id: true,
          userId: true,
          age: true,
          bio: true,
          lastDonationDate: true,
          createdAt: true,
          updatedAt: true,
        },
      },
    },
    orderBy: {
      [sortBy]: sortOrder,
    },
    skip,
    take: limit,
  });

  const totalDonors = await prisma.user.count({
    where: {
      AND: andConditions,
    },
  });

  return {
    meta: {
      total: totalDonors,
      page,
      limit,
    },
    donorList,
  };
};

export const userService = {
  createUser,
  getDonorList,
};
