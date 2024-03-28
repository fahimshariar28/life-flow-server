import { z } from "zod";

const updateUserProfileSchema = z.object({
  body: z.object({
    bio: z
      .string({
        invalid_type_error: "Bio must be a string",
      })
      .optional(),
    age: z
      .number({
        invalid_type_error: "Age must be a number",
      })
      .optional(),
    lastDonationDate: z
      .string({
        invalid_type_error: "Last donation date must be a string",
      })
      .optional(),
  }),
});

export const userProfileValidation = {
  updateUserProfile: updateUserProfileSchema,
};
