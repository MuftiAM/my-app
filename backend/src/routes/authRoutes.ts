import express from "express";
import { login, signup } from "../controllers/authController";

const router = express.Router();

// Define routes for authentication
router.post("/login", login);
router.post("/signup", signup);

export default router;
