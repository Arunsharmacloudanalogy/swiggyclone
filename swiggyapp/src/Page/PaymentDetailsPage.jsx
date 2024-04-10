import React from "react";
import { UseSelector, useSelector } from "react-redux";
import ItemtoOrder from "../Components/ItemtoOrder";
import AddressForm from "../Components/AddressForm";

function PaymentDetailsPage() {
  const cart = useSelector((state) => state.cart);
  const totalSum = cart.reduce((acc, item) => {
    return (acc += item.foodQuantity * item.price);
  }, 0);
  return (
    <div>
      {cart.length > 0 && (
        <div className="max-w-[1100px] mx-auto p-8">
          <h1 className="font-bold md:text-[20px] md:leading-loose md:tracking-wider">
            Payment Details
          </h1>
          <p className="capitalize text-[14px] md:text-[16px]">
            complete your purchase by providing nessacary details
          </p>

          {/* item in cart  */}

          <div className="flex flex-col md:flex-row gap-4 justify-between my-4 items-center ">
            <div className="w-full md:w-1/2">
              {cart.length > 0 &&
                cart.map((item) => {
                  return <ItemtoOrder item={item} />;
                })}
            </div>

            <div className="bg-blue-100 p-5 flex flex-col gap-2  max-w-[400px] w-full">
              <div className="flex justify-between text-lg gap-4">
                <p className="text-lg">Total</p>
                <p className="">₹{totalSum}</p>
              </div>

              <div className="w-full h-[1px] bg-black bg-opacity-55"></div>

              <div className="flex justify-between gap-4">
                <p>Items</p>
                <p>{cart.length}</p>
              </div>
              <div className="flex justify-between  gap-4">
                <p>Shipping cost</p>
                <p>free</p>
              </div>
            </div>
          </div>

          {/* contact form */}
          <AddressForm amount={totalSum} cart = {cart}/>
        </div>
      )}
    </div>
  );
}

export default PaymentDetailsPage;
