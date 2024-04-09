const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");
const bodyParser = require("body-parser");
const sequelize = require("./config/database.js");
const { addOrder } = require("./controllers/addOrder.js");
const User = require("./modals/Users.js");
const Order = require("./modals/Orders.js");
const { HmacSHA512 } = require("crypto-js");
const cookieParser = require("cookie-parser");
require("dotenv").config();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

// User.hasMany(Order)
sequelize.sync({ alter: true });

// function verifyToken(req, res, next) {
//   var header = req.headers["authorization"];
//   if (typeof header !== "undefined") {
//     req.token = header;
//     next();
//   } else {
//     res.send({
//       result: "Token is not valid",
//     });
//   }
// }
// app.post("/profile", verifyToken, (req, res) => {
//   jwt.verify(req.token, secretKey, (err, authData) => {
//     if (err) {
//       res.send({ result: "invalid token" });
//     } else {
//       res.json({
//         message: "profile accessed",
//         authData,
//       });
//     }
//   });
// });

app.get("/", (req, res) => {
  res.send("getting resp from server");
});

//exporting routers of Auth
const AuthRoute = require("./routes/Auth.js");
app.use(AuthRoute);

//exporting routers of Order
const OrderRoutes = require("./routes/OrderRoute.js");
app.use(OrderRoutes);

//starting server
app.listen(process.env.PORT, () => {
  console.log(`App is running of PORT : ${process.env.PORT}`);
});
