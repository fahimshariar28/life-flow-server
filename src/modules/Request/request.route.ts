import express from "express";
import { requestController } from "./request.controller";
import validateRequest from "../../middlewares/validateRequest";
import { requestValidation } from "./request.validation";
import authHelp from "./../../middlewares/authHelp";

const router = express.Router();

router.post(
  "/donation-request",
  authHelp(),
  validateRequest(requestValidation.requestDonor),
  requestController.requestDonor
);

export const requestRoutes = router;
