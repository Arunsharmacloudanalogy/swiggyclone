const Order = require('../modals/Orders');
exports.getOrder = async (req, res) => {
  const id = req.params.userId.toString();
  console.log("user id is ", id);
  try {
    const order = await Order.findAll({ where: { userId: id } });
     
    if (order.length > 0) {
      res.json(order);
    } else {
      res.status(404).send("No order found for the given user ID.");
    }
  } catch (err) {
    console.error("Error fetching order:", err);
    res.status(500).send("An error occurred while fetching order.");
  }
};
