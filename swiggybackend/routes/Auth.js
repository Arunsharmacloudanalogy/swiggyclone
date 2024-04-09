const express = require("express");
const router = express.Router();

const signIn = require("../controllers/signIn");
const signUp = require("../controllers/signUp");
router.post("/signin", signIn);
router.post("/signup", signUp);

module.exports = router;
