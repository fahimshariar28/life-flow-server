import { z } from "zod";

export const requestSchema = z.object({
  body: z.object({
    donorId: z.string({
      required_error: "Donor ID is required",
      invalid_type_error: "Donor ID must be a string",
    }),
    phoneNumber: z.string({
      required_error: "Phone number is required",
      invalid_type_error: "Phone number must be a string",
    }),
    dateOfDonation: z.string({
      required_error: "Date is required",
      invalid_type_error: "Date must be a string",
    }),
    hospitalName: z.string({
      required_error: "Hospital name is required",
      invalid_type_error: "Hospital name must be a string",
    }),
    hospitalAddress: z.string({
      required_error: "Hospital address is required",
      invalid_type_error: "Hospital address must be a string",
    }),
    reason: z.string({
      required_error: "Reason is required",
      invalid_type_error: "Reason must be a string",
    }),
  }),
});

export const requestValidation = {
  requestDonor: requestSchema,
};
