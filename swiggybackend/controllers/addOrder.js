const sequelize = require("sequelize");
const Order = require("../modals/Orders");
const User = require("../modals/Users");
const addOrder = async (req, res) => {
  const { userId, product, address, pinCode, landmark, city } = req.body;
  try {
    const transformedOrderData = product.map((order) => ({
      item: order.title,
      price: order.price,
      quantity: order.foodQuantity,
      userId: userId,
      address: address,
      pincode: pinCode,
      landmark: landmark,
      city: city,
    }));

    await Order.bulkCreate(transformedOrderData);

    res.json({
      message: "User and orders created successfully",
      ordersCount: transformedOrderData.length,
    });
  } catch (err) {
    console.error("Error in addOrder: ", err);
    res.status(500).json({ message: err.message });
  }
};

module.exports = { addOrder };
