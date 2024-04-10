const express = require("express");
const router = express.Router();

const signIn = require("../controllers/signIn");
const signUp = require("../controllers/signUp");
const logOut = require('../controllers/logOut');
router.post("/signin", signIn);
router.post("/signup", signUp);
router.post('/logout',logOut)

module.exports = router;
