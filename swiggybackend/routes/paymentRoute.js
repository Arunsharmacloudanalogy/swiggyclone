const express = require("express");
const router = express.Router();
require("dotenv").config();
const { checkOut, paymentVerification } = require("../controllers/checkOut");
router.post("/payment", checkOut);
router.post("/paymentVerification", paymentVerification);
router.get("/getkey", (req, res) => {
  res.status(200).json({ key: process.env.RAZORPAY_API_KEY });
});

module.exports = router;
