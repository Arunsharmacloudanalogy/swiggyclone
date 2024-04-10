import { React, useState } from "react";
import { toast } from "react-hot-toast";
import { IoIosAdd } from "react-icons/io";
import { LuMinus } from "react-icons/lu";
import useQuantityHandler from "./hooks/useQuantityHandler";
const Recommended = ({ data, offer }) => {
  const [quantity, setQuantity] = useState(0);
  const { title, price, rating, reviews, description, restaurant, image } = data;
  const { handleIncrement, handleDecrement, addToCart } = useQuantityHandler(
    quantity,
    setQuantity,
    offer,
    data
  );

  const handleAddClick = () => {
    setQuantity(1);
    addToCart(1, "i");
    toast.success("Item added to cart");
  };

  return (
    <div className="relative px-[20px] my-1 ">
      <div className="flex items-center">
        <div className="rec-left w-3/4">
          <svg
            aria-hidden="true"
            height="16"
            width="16"
            class="sc-dcJsrY bExgxb"
          ></svg>
          <p className="font-bold text-[14px] md:text-[15px]">{title}</p>
          <p className="font-bold text-[14px] md:text-[15px]">₹ {price}</p>
          <div className="flex gap-1 items-center py-1">
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              fillColor="#c4c4c4"
            >
              <rect width="14" height="14" fill="white"></rect>
              <path
                d="M5.67163 3.99166C6.22068 2.34179 6.49521 1.51686 7 1.51686C7.50479 1.51686 7.77932 2.34179 8.32837 3.99166L8.65248 4.96556H9.60668C11.4122 4.96556 12.315 4.96556 12.4703 5.45302C12.6256 5.94049 11.8893 6.4628 10.4167 7.50744L9.67376 8.03444L9.97544 8.94095C10.5325 10.615 10.8111 11.452 10.4033 11.754C9.99553 12.056 9.27604 11.5457 7.83705 10.5249L7 9.93112L6.16295 10.5249C4.72396 11.5457 4.00447 12.056 3.5967 11.754C3.18893 11.452 3.46747 10.615 4.02456 8.94095L4.04557 8.87783C4.18081 8.47145 4.24843 8.26825 4.18684 8.08006C4.12525 7.89187 3.94958 7.76725 3.59824 7.51802C2.11566 6.46633 1.37437 5.94049 1.52971 5.45302C1.68504 4.96556 2.5878 4.96556 4.39332 4.96556H5.34752L5.67163 3.99166Z"
                fill="#116649"
              ></path>
            </svg>
            <p className="text-green-600 font-semibold">{rating}</p>
            <p>({reviews})</p>
          </div>
          <div>
            <p className="tracking-tighter text-[11px] md:text-[14px] pr-4">
              {description}
            </p>
          </div>
        </div>
        <div className="rec-right relative">
          <div className="relative">
            <img
              className="h-[130px] md:h-[144px] w-[156px] object-cover rounded-lg"
              src={image}
              alt=""
            />
          </div>
          {quantity > 0 ? (
            <div className="flex items-center justify-center gap-2 bg-white border-2 border-[#c4c4c4] py-2 px-8 -translate-x-[50%] -translate-y-[50%] text-center rounded-lg absolute left-[50%]">
              <button
                className="font-bold px-2 bg-green-400 rounded-full py-2"
                onClick={handleDecrement}
              >
                <LuMinus />
              </button>
              <span className="font-bold">{quantity}</span>

              <button
                className="font-semibold p-2 bg-green-400 rounded-full"
                onClick={handleIncrement}
              >
                <IoIosAdd />
              </button>
            </div>
          ) : (
            <button
              onClick={handleAddClick}
              className="bg-white border-2 border-[#c4c4c4] text-[#c4c4c4] py-2 px-8 -translate-x-[50%] -translate-y-[50%] text-center rounded-lg absolute left-[50%]"
            >
              ADD
            </button>
          )}
        </div>
      </div>
      <div className="w-full h-[1px] my-10 bg-[#c4c4c4]"></div>
    </div>
  );
};

export default Recommended;
