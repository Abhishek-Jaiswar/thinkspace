import express from "express";
import {
  registerUser,
  loginUser,
  logout,
  getProfile,
  upgradeProfile,
} from '../controllers/user.controller.js'
import { rateLimitter } from "../middlewares/rateLimitter.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";

const router = express.Router()

router.post("/register", registerUser)
router.post("/login", rateLimitter, loginUser)
router.post("/logout", logout)
router.get("/me", authMiddleware, getProfile)
router.put('/upgrade-profile', authMiddleware, upgradeProfile)

export default router;

