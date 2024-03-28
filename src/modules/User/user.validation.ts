import { z } from "zod";

const createUserSchema = z.object({
  body: z.object({
    name: z.string({
      required_error: "Name is required",
      invalid_type_error: "Name must be a string",
    }),
    email: z.string({
      required_error: "Email is required",
      invalid_type_error: "Email must be a string",
    }),
    password: z.string({
      required_error: "Password is required",
      invalid_type_error: "Password must be a string",
    }),
    bloodType: z.enum(["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"], {
      required_error: "Blood type is required",
      invalid_type_error: "Blood type must be a string",
    }),
    location: z.string({
      required_error: "Location is required",
      invalid_type_error: "Location must be a string",
    }),
    age: z.number({
      required_error: "Age is required",
      invalid_type_error: "Age must be a number",
    }),
    bio: z.string({
      required_error: "Bio is required",
      invalid_type_error: "Bio must be a string",
    }),
    lastDonationDate: z.string({
      required_error: "Last donation date is required",
      invalid_type_error: "Last donation date must be a string",
    }),
  }),
});

export const userValidation = {
  createUser: createUserSchema,
};
