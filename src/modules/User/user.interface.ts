import { BloodType } from "./user.constant";

export type IUser = {
  name: string;
  email: string;
  password: string;
  bloodType: keyof typeof BloodType;
  location: string;
  availability: boolean;
  age: number;
  bio: string;
  lastDonationDate: string;
};
