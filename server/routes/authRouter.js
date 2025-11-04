import express from "express";
import {
  isAuthenticated,
  login,
  logout,
  register,
  resetPassword,
  sendResetOtp,
  sendVerifyOtp,
  verifyEmail,
} from "../controllers/authController.js";

import userAuth from "../middleware/userAuth.js";

// 2. You named your validation file 'validate.js', which is fine.
import { validate } from "../middleware/validationMiddleware.js";
import {
  registerSchema,
  loginSchema,
  otpSchema,
  resetPasswordSchema,
  emailSchema,
} from "../models/validationSchema.js";

const authRouter = express.Router();

// --- Public Routes (No auth needed) ---
authRouter.post("/register", validate(registerSchema), register);
authRouter.post("/login", validate(loginSchema), login);
authRouter.post("/send-reset-otp", validate(emailSchema), sendResetOtp);
authRouter.post(
  "/reset-password",
  validate(resetPasswordSchema),
  resetPassword
);

// --- Protected Routes (Auth middleware is required) ---

// 3. Use the 'userAuth' MIDDLEWARE from 'userAuth.js' here
authRouter.post("/logout", userAuth, logout);

authRouter.post("/send-verify-otp", userAuth, sendVerifyOtp);

authRouter.post("/verify-email", userAuth, validate(otpSchema), verifyEmail);

// 4. Corrected /is-auth route
//    - First, the middleware runs to check for a cookie.
//    - If it passes, the 'isAuthenticated' controller runs.
authRouter.get("/is-auth", userAuth, isAuthenticated);

export default authRouter;
