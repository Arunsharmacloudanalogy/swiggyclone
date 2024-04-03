const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");
const bodyParser = require("body-parser");
const sequelize = require("../src/Utils/database");
var CryptoJS = require("crypto-js");
const secretKey = "arun";
const {
  addOrderData,
  addCustomerData,
} = require("../src/Controllers/DataController.js");
const User = require("../src/Modals/Users");
const Order = require("../src/Modals/Orders");
const { HmacSHA512 } = require("crypto-js");

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
app.get("/", (req, res) => {
  res.send("getting resp from server");
});
app.post("/signin", (req, res) => {
  let data = req.body;
  console.log("data ", data);
  // res.send(data);

  jwt.sign({ data }, secretKey, { expiresIn: "1hr" }, (err, token) => {
    if (err) {
      res.status(500).json({ error: "Internal Server Error" });
    } else {
      const ciphertext = CryptoJS.AES.encrypt(JSON.stringify(token), secretKey).toString();
      console.log('ciphertext ' , ciphertext);
      res.json({ ciphertext });
    }
  });
});
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
app.post("/data", addCustomerData);
// app.post("/user", addCustomerData);

app.listen(5000, () => {
  console.log("app is running on port:5000");
});
