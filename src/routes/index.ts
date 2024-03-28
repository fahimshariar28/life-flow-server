import express from "express";
import { userRoutes } from "../modules/User/user.route";

const router = express.Router();

const moduleRoutes = [
  {
    route: userRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.route));

export default router;
