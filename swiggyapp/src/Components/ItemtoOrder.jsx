import React from "react";

function ItemtoOrder({ item }) {
  const { title, image, place, price, foodQuantity } = item;
  return (
    <div className="flex flex-col gap-2 border-blue-200 border-[1px] p-3 rounded-md my-4">
      <div className="flex gap-3">
        <img src={image} className="md:w-[80px] md:h-[80px] w-[50px] h-[50px] rounded-md" alt={title} />
        <div className="flex flex-col">
          <p className="font-bold leading-1 tracking-wide text-[11px] md:text-[15px]">
            Pizza Hut
          </p>
          <p className="text-[10px] md:text-[14px]">{place}</p>
        </div>
      </div>

      <div className="flex gap-2 justify-between items-center">
        <h2 className="text-[11px] md:text-[16px] w-3/5 ">{title}</h2>

        <span className="text-[11px] md:text-[14px] w-full">
          ₹{price} X {foodQuantity} =
          <span className="font-semibold">₹{price * foodQuantity}</span>
        </span>
      </div>
    </div>
  );
}

export default ItemtoOrder;
