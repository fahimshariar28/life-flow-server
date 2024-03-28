import express from "express";
import { userController } from "./user.controller";
import validateRequest from "../../middlewares/validateRequest";
import { userValidation } from "./user.validation";
import authHelp from "../../middlewares/authHelp";

const router = express.Router();

router.post(
  "/register",
  validateRequest(userValidation.createUser),
  userController.createUser
);

router.get("/donor-list", userController.getDonorList);

router.get("/my-profile", authHelp(), userController.getUserProfile);

export const userRoutes = router;
