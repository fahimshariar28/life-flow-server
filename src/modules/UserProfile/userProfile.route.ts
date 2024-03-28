import express from "express";
import validateRequest from "../../middlewares/validateRequest";
import authHelp from "../../middlewares/authHelp";
import { userProfileValidation } from "./userProfile.validation";
import { userProfileController } from "./userProfile.controller";

const router = express.Router();

router.put(
  "/my-profile",
  authHelp(),
  validateRequest(userProfileValidation.updateUserProfile),
  userProfileController.updateUserProfile
);

export const userProfileRoutes = router;
