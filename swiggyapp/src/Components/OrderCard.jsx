const OrderCard = ({ order }) => {
  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl my-5">
      <div className="md:flex">
        <div className="p-8">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
            Order ID: {order.orderId}
          </div>

          <div className="block mt-3">
            <div className="text-gray-700">
              <p className="text-lg font-semibold">{order.item}</p>
              <p className="text-gray-500">Price: ${order.price}</p>
              <p className="text-gray-500">Quantity: {order.quantity}</p>
            </div>
            <div className="mt-4">
              <div className="text-sm text-gray-600">
                Subtotal: ${(order.price * order.quantity).toFixed(2)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default OrderCard;
