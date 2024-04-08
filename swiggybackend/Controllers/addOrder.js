const sequelize = require("sequelize");
const Order = require("../Modals/Orders");
const User = require("../Modals/Users");

const addOrder = async (req, res) => {
  const { userId, product } = req.body;

  try {
    const transformedOrderData = product.map((order) => ({
      item:order.title,
      price:order.price,
      quantity:order.foodQuantity,
      userId: userId,
    }));

    await Order.bulkCreate(transformedOrderData);

    res.json({
      message: "User and orders created successfully",
      // user: newUser,
      ordersCount: transformedOrderData.length,
    });
  } catch (err) {
    console.error("Error in addOrder: ", err);
    res.status(500).json({ message: err.message });
  }
};

module.exports = { addOrder };
