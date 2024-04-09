const OrderCard = ({ order }) => {
  return (
    <div className=" border-blue-300 border-[1px] bg-white rounded-xl shadow-md overflow-hidden my-3 max-w-[500px] mx-auto">
      <div className="flex">
        <div className="p-2 md:p-8">
          <div className="uppercase tracking-wide text-[12px] text-indigo-500 font-semibold">
            Order ID: {order.orderId}
          </div>

          <div className="block mt-3">
            <div className="text-gray-700">
              <p className="md:text-lg font-semibold">{order.item}</p>
              <p className="text-gray-500">Price: ₹{order.price}</p>
              <p className="text-gray-500">Quantity: {order.quantity}</p>
            </div>
            <div className="mt-4">
              <div className="text-sm text-gray-600">
                Total: ₹{(order.price * order.quantity).toFixed(2)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default OrderCard;
