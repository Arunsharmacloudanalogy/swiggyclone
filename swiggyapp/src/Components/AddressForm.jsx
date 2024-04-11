import React, { useState } from "react";
import Cookies from "js-cookie";
import useOrderHandler from "./hooks/useOrderHandler";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { clearCart } from "../redux/slices/cartslice";
import axios from "axios";

function AddressForm({ amount, cart }) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    address: "",
    pinCode: "",
    city: "",
    Landmark: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const { orderHandler } = useOrderHandler();
  console.log("Id at address page ", Cookies.get("Id"));
  const dispatch = useDispatch();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let data = {
        userId: Cookies.get("Id"),
        product: cart,
        address: formData.address,
        pinCode: formData.pinCode,
        city: formData.city,
        Landmark: formData.Landmark,
      };
      console.log(formData);
      orderHandler(data);
      dispatch(clearCart());

      // Make payment API call
      const paymentResponse = await axios.post(
        "http://localhost:4000/payment",
        { amount }
      );
      const order = paymentResponse.data.order;
      console.log("order here ", order);
      console.log("total amount ", amount);

      // Fetch key
      const keyResponse = await axios.get("http://localhost:4000/getkey");
      const key = keyResponse.data.key;

      // Create options for Razorpay
      const options = {
        key,
        amount: amount * 100,
        currency: "INR",
        name: "Arun sharma",
        order_id: order.id,
        description: "Tutorial of RazorPay",
        image: "https://avatars.githubusercontent.com/u/25058652?v=4",
        handler: function (response) {
          alert(response.razorpay_payment_id);
          alert(response.razorpay_order_id);
          alert(response.razorpay_signature);
        },
        prefill: {
          name: "Arun sharma",
          email: "arunmadhopur750@gmail.com",
          contact: "9116016932",
        },
        notes: {
          address: "Razorpay corporate office",
        },
        theme: {
          color: "#3399cc",
        },
      };
      console.log(window);
      const razor = new window.Razorpay(options);
      razor.open();
      navigate("/order");
    } catch (error) {
      console.error("Error occurred during payment:", error);
    }
  };
  return (
    <div className="p-2 md:p-6 mx-auto bg-white rounded-lg shadow-md md:w-3/4">
      <h2 className="text-xl md:text-2xl font-semibold mb-4">Address Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="address"
            className="block text-gray-700 font-semibold mb-2"
          >
            Address
          </label>
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border text-[14px] md:text-[16px] border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            placeholder="Enter your address"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="pinCode"
            className="block text-gray-700 font-semibold mb-2"
          >
            Pin Code
          </label>
          <input
            type="text"
            id="pinCode"
            name="pinCode"
            value={formData.pinCode}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border text-[14px] md:text-[16px] border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            placeholder="Enter your pin code"
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="Landmark"
            className="block text-gray-700 font-semibold mb-2"
          >
            Landmark
          </label>
          <input
            type="text"
            id="Landmark"
            name="Landmark"
            value={formData.Landmark}
            onChange={handleChange}
            className="w-full px-4 py-2 border text-[14px] md:text-[16px] border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            placeholder="Enter Landmark near you"
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="city"
            className="block text-gray-700 font-semibold mb-2"
          >
            City
          </label>
          <input
            type="text"
            id="city"
            name="city"
            value={formData.city}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border text-[14px] md:text-[16px] border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            placeholder="Enter your city"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500  text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
        >
          Pay ₹ {amount}
        </button>
      </form>
    </div>
  );
}

export default AddressForm;
