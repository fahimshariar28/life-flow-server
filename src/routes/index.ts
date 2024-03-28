import express from "express";
import { userRoutes } from "../modules/User/user.route";
import { authRoutes } from "../modules/Auth/auth.route";

const router = express.Router();

const moduleRoutes = [
  {
    route: userRoutes,
  },
  {
    route: authRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.route));

export default router;
