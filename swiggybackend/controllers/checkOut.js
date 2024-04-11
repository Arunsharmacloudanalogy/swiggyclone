const razorpay = require("razorpay");
const instance = require("../razorpay/razorpayInstance");
const crypto = require("crypto");
exports.checkOut = async (req, res) => {
  const options = {
    amount: Number(req.body.amount * 100),
    currency: "INR",
    receipt: new Date(),
    payment_capture: 1,
  };
  try {
    const order = instance.orders.create(options);
    res.json({
      success: true,
      order,
    });
  } catch (err) {
    res.status(400).send("Not able to create order. Please try again!");
  }
};
exports.paymentVerification = async (req, res) => {
  const { razorpay_order_id, razorpay_payment_id, razorpay_signature } =
    req.body;
  console.log(razorpay_order_id, razorpay_payment_id, razorpay_signature);
  const body = razorpay_order_id + "|" + razorpay_payment_id;
  console.log("body is here  ", req.body);
  const expectedSignature = crypto
    .createHmac("sha256", process.env.RAZORPAY_API_SECRET)
    .update(body.toString())
    .digest("hex");
  console.log(expectedSignature, razorpay_signature);
  const isAuthentic = expectedSignature === razorpay_signature;

  if (isAuthentic) {
    // Database comes here

    // res.redirect(
    //   `http://localhost:3000/paymentsuccess?reference=${razorpay_payment_id}`
    // );
    res.status(200).json({
      success: true,
      message: req.body,
    });
  } else {
    res.status(400).json({
      success: false,
    });
  }
};
