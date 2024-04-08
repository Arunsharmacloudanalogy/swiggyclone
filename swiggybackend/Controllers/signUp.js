const { sign } = require("jsonwebtoken");
const User = require("../Modals/Users");
const brcypt = require("bcrypt");
const { where } = require("sequelize");
const signUp = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    //check user exists
    if (!name || !email || !password) {
      return res.status(400).json({
        success: false,
        message: "Please fill all the fields",
      });
    }
    const user = await User.findOne({ where: { email: email } });
    if (user) {
      res.status(400).json({
        success: false,
        message: "User already exists",
      });
    }
    //secure password
    let hashedPassword;

    try {
      hashedPassword = await brcypt.hash(password, 10);
    } catch (err) {
      return res.status(500).json({
        success: false,
        message: "Error in hashing Password",
      });
    }
    //create new user
    const newUser = await User.create({
      name,
      email,
      password: hashedPassword,
    });
    res.status(200).json({
      success: true,
      message: "new user created",
      data: newUser
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "user cannot register",
    });
  }
};
module.exports = signUp;

//   res.json("response");
//   jwt.sign(
//     { data },
//     process.env.SECRET_KEY,
//     { expiresIn: "1hr" },
//     (err, token) => {
//       if (err) {
//         res.status(500).json({ error: "Internal Server Error" });
//       } else {
//         const ciphertext = CryptoJS.AES.encrypt(
//           JSON.stringify(token),
//           secretKey
//         ).toString();
//         console.log("ciphertext ", ciphertext);
//         res.json({ ciphertext });
//       }
//     }
//   );
