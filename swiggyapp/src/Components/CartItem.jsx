import React from "react";

function CartItem({ item, onOrder }) {
  const { title, image, place, price } = item;

  return (
    <div className="relative max-w-[500px] mx-auto h-full flex flex-col gap-4  bg-white px-5 py-4 rounded-md" >
      <div className="flex  gap-2">
        <img src={image} className="w-[50px] h-[50px]" />
        <div className="flex flex-col ">
          <p className="font-bold leading-1 tracking-wide">Pizza Hut</p>
          <p>{place}</p>
        </div>
      </div>
      <div className="flex gap-2 justify-between items-center">
        <h2>{title}</h2>
        <p>₹ {price}</p>
      </div>
    </div>
  );
}

export default CartItem;
