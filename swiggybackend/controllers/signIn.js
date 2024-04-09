const jwt = require("jsonwebtoken");
const CryptoJS = require("crypto-js");
const Users = require("../modals/Users");
const bcrypt = require("bcrypt");

require("dotenv").config();
const signIn = async (req, res) => {
  let { email, password } = req.body;
  try {
    //validation krlo
    if (!email || !password) {
      res.status(400).json({
        success: false,
        message: "Please fill all the fields",
      });
    }
    
    //check user registered or not
    let user = await Users.findOne({ where: { email } });
    console.log(user);
    if (!user) {
      res.staus(400).json({
        success: false,
        message: "User is not registered...",
      });
    }
     
    const payload = {
      id: user.id,
      name: user.name,
      email: user.email,
    };
    //verify the password
    if (await bcrypt.compare(password, user.password)) {
      //generate token
      let token = jwt.sign(payload, process.env.SECRET_KEY, {
        expiresIn: "1h",
      });
      // user = user.toObject();
      user.token = token;
      // console.log(token);
      user.password = undefined;
      const options = {
        expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
        httpOnly: true,
      };
      res.cookie("token", token, options).status(200).json({
        success: true,
        token,
        user,
        message: "Logged in successfully",
      });
      console.log('successfully signed in');
    } else {
      return res.status(403).json({
        success: false,
        message: "Password do not match",
      });
    }
    // const decrptPass = CryptoJS.AES.decrypt(
    //   user.password,
    //   process.env.SECRET_KEY
    // ).toString(CryptoJS.enc.Utf8);
    // if (password === decrptPass) {
    //   //authenicate the user
    //   res.status(200).json({
    //     success: true,
    //     message: "User loggedIn successfully",
    //   });
    // } else {
    //   res.status(400).json({
    //     success: false,
    //     message: "Wrong password",
    //   });
    // }
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Can't sign in right now",
    });
  }
};
module.exports = signIn;
