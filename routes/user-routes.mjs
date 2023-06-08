import express from "express";
import { getAllUsers, login, signup } from "../controllers/user-controller.mjs";

const router = express.Router();
//home page
router.get("/", getAllUsers);
router.post("/signup", signup);
router.post("/login", login);

export default router;