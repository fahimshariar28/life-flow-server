import express from "express";
import { userRoutes } from "../modules/User/user.route";
import { authRoutes } from "../modules/Auth/auth.route";
import { requestRoutes } from "../modules/Request/request.route";
import { userProfileRoutes } from "../modules/UserProfile/userProfile.route";

const router = express.Router();

const moduleRoutes = [
  {
    route: userRoutes,
  },
  {
    route: authRoutes,
  },
  {
    route: requestRoutes,
  },
  {
    route: userProfileRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.route));

export default router;
