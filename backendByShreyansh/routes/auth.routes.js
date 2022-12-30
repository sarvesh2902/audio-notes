const express = require("express");
const router = express.Router();

const authController = require("../controllers/auth.controllers");




router.post("/register", authController.addUserData);

router.post("/login", authController.loginUserData);

router.post("/generate-otp", authController.generateOtp);

router.post("/verify-otp", authController.verifyOTP);

router.post("/reset-password", authController.resetPassword);

module.exports = router;