import express from "express";
import { registerUser, loginUser, logout } from '../controllers/user.controller.js'
import { rateLimitter } from "../middlewares/rateLimitter.js";

const router = express.Router()

router.post("/register", rateLimitter, registerUser)
router.post("/login", rateLimitter, loginUser)
router.post('/logout', logout)

export default router;

