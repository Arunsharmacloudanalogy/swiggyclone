const jwt = require("jsonwebtoken");
require("dotenv").config();

exports.auth = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    const token = authHeader && authHeader.split(" ")[1];
    console.log("token ", token);
    if (!token) {
      return res.status(401).json({
        success: false,
        message: "token missing",
      });
    }
    //verify the token
    try {
      const decode = jwt.verify(token, process.env.SECRET_KEY);
      console.log("decoded data => ", decode);
      req.user = decode;
    } catch (e) {
      return res.status(401).json({
        success: false,
        message: "token is invalid",
      });
    }

    next();
  } catch (err) {
    return res.status(401).json({
      success: false,
      message: "Something went wrong while verifying token",
    });
  }
};
