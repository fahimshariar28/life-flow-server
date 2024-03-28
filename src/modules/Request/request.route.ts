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

router.get("/donation-request", authHelp(), requestController.getRequests);

router.put(
  "/donation-request/:requestId",
  authHelp(),
  validateRequest(requestValidation.updateRequest),
  requestController.updateRequest
);

export const requestRoutes = router;
