import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { add } from "../redux/slices/cartslice";
function CartItem({ item, offer }) {
  const { title, image, place, price, foodQuantity } = item;
  const [currentQuantity, setCurentQuantity] = useState(foodQuantity);
  const dispatch = useDispatch();
  const handleIncrement = () => {
    const newQuantity = foodQuantity + 1;
    setCurentQuantity(newQuantity);
    addToCart(newQuantity, "i");
  };

  const handleDecrement = () => {
    if (foodQuantity > 0) {
      const newQuantity = foodQuantity - 1;
      setCurentQuantity(newQuantity);
      addToCart(newQuantity, "d");
    }
  };
  const addToCart = (foodQuantity, op) => {
    let { distance, place } = offer;
    let newItem = { title, price, image, distance, foodQuantity, place };
    dispatch(add({ newItem, op }));
  };
  return (
    <div className="relative max-w-[500px] mx-auto h-full flex flex-col gap-4 bg-white px-5 py-4 rounded-md my-4">
      <div className="flex gap-2 flex-wrap justify-between">
        <div className="flex gap-2">
          <img src={image} className="w-[50px] h-[50px]" alt={title} />
          <div className="flex flex-col">
            <p className="font-bold leading-1 tracking-wide text-[11px] md:text-[15px]">
              Pizza Hut
            </p>
            <p className="text-[10px] md:text-[14px]">{place}</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button
            className="bg-blue-500 text-white px-3 md:px-5 py-1 rounded-md"
            onClick={handleDecrement}
          >
            -
          </button>
          <span className="text-lg font-bold">{foodQuantity}</span>
          <button
            className="bg-blue-500 text-white px-3 md:px-5 py-1 rounded-md"
            onClick={handleIncrement}
          >
            +
          </button>
        </div>
      </div>
      <div className="flex gap-2 justify-between items-center">
        <h2 className="text-sm md:text-[16px]">{title}</h2>

        <span className="text-[12px] md:text-[14px]">
          ₹{price} X {foodQuantity} =
          <span className="font-semibold">₹{price * foodQuantity}</span>
        </span>
      </div>
    </div>
  );
}

export default CartItem;
