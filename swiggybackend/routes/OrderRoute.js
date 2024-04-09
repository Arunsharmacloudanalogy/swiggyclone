const express = require("express");
const { addOrder } = require("../controllers/addOrder");
const router = express.Router();
const { auth } = require("../middlewares/authMiddleware");
const { getOrder } = require("../controllers/getOrder");
//get order with userId
router.get("/getOrder/:userId", getOrder);

//add Orders in db
router.post("/addOrder", addOrder);
module.exports = router;
