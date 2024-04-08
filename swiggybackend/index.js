const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");
const bodyParser = require("body-parser");
const sequelize = require("./config/database.js");
const { addOrder } = require("./Controllers/addOrder.js");
const User = require("./Modals/Users.js");
const Order = require("./Modals/Orders.js");
const { HmacSHA512 } = require("crypto-js");

require("dotenv").config();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

// User.hasMany(Order)
sequelize.sync({ force: true });

function verifyToken(req, res, next) {
  var header = req.headers["authorization"];
  if (typeof header !== "undefined") {
    req.token = header;
    next();
  } else {
    res.send({
      result: "Token is not valid",
    });
  }
}
app.post("/profile", verifyToken, (req, res) => {
  jwt.verify(req.token, secretKey, (err, authData) => {
    if (err) {
      res.send({ result: "invalid token" });
    } else {
      res.json({
        message: "profile accessed",
        authData,
      });
    }
  });
});

app.get("/", (req, res) => {
  res.send("getting resp from server");
});

app.get("/getOrder/:userId", async (req, res) => {
  const { userId } = req.params;
  try {
    const orders = await Order.findAll({ where: { userId: userId } });
    if (orders.length > 0) {
      res.json(orders);
    } else {
      res.status(404).send("No orders found for the given user ID.");
    }
  } catch (err) {
    console.error("Error fetching orders:", error);
    res.status(500).send("An error occurred while fetching orders.");
  }
});

app.post("/data", addOrder);

//exporting routers of Auth
const AuthRoute = require("./Routes/Auth.js");
app.use(AuthRoute);

app.listen(process.env.PORT, () => {
  console.log(`App is running of PORT : ${process.env.PORT}`);
});
