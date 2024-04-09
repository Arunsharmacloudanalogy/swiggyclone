import React, { useState } from "react";
import CartItem from "../Components/CartItem";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import useOrderHandler from "../Components/hooks/useOrderHandler";
import { clearCart } from "../redux/slices/cartslice";
import Cookies from "js-cookie";

const CartPage = ({offer}) => {
  const { orderHandler } = useOrderHandler();
  const navigate = useNavigate();
  let cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const [newcart, setNewCart] = useState(cart);
  console.log(cart);
  //ID OF LOGGED IN USER->cookie
  let data = {
    userId: Cookies.get("Id"),
    product: cart,
  };
  const handleSubmit = () => {
    orderHandler(data);
    dispatch(clearCart());
    // navigate("/order");
  };
  return (
    <div className="relative h-screen bg-blue-200 py-10">
      {cart.length > 0 ? (
        <div className="m-4">
          {cart.map((item) => (
            <CartItem offer={offer} item={item} />
          ))}
          <button
            className="text-blue-500 mx-auto bg-white bg-opacity-30 px-5 py-2 border-blue-200 border-2 shadow-lg my-4 text-3xl hover:bg-blue-300 hover:text-black rounded-lg duration-150 flex items-center justify-center"
            onClick={handleSubmit}
          >
            Order Now
          </button>
        </div>
      ) : (
        <div className="flex justify-center flex-col items-center w-full h-full">
          <div className="text-[30px] font-semibold">No Item in cart</div>
          <button
            className="text-blue-500 bg-white bg-opacity-30 px-5 py-2 border-blue-200 border-2 shadow-lg my-4 text-3xl hover:bg-blue-300 hover:text-black rounded-md duration-150"
            onClick={() => navigate("/")}
          >
            Add Items
          </button>
        </div>
      )}
    </div>
  );
};

export default CartPage;
