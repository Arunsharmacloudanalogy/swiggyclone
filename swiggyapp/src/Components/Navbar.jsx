import React, { useState } from "react";
import { FaAngleDown, FaUser } from "react-icons/fa";
import { IoSearch, IoHelpBuoyOutline } from "react-icons/io5";
import { BiSolidOffer } from "react-icons/bi";
import { CiShoppingCart } from "react-icons/ci";
import { NavLink, useNavigate } from "react-router-dom";
import { IoBagOutline } from "react-icons/io5";
import { useSelector } from "react-redux";
import axios from "axios";
import Cookies from "js-cookie";
import toast from "react-hot-toast";
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const cart = useSelector((state) => state.cart);
  const token = Cookies.get("Token");
  function logoClickHandler() {
    navigate("/");
  }
  function signInHandler() {
    navigate("/signin");
  }
  function logOutHandler() {
    Cookies.remove("Token");
    toast.success("Logged Out Successfully");
    navigate("/");
  }
  function orderNavigateHandler() {
    if (token) {
      navigate("/order");
    } else {
      toast.error("Please Login First");
      navigate("/signin");
    }
  }
  function cartNavigateHandler() {
    if (token) {
      navigate("/cart");
    } else {
      toast.error("Please login first");
      navigate("/signin");
    }
  }
  return (
    <div className="relative shadow-md w-full h-full bg-blue-100">
      <div className="flex flex-wrap justify-between items-center p-4 max-w-[1200px] mx-auto">
        <div className="flex items-center gap-4 mb-4 md:mb-0">
          <div className="mr-2 text-orange-500">
            <svg
              onClick={logoClickHandler}
              class="_8pSp- cursor-pointer"
              viewBox="0 0 559 825"
              height="49"
              width="34"
              fill="#fc8019"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M542.92 388.542C546.805 366.526 542.355 349.598 530.881 340.76C513.621 327.466 487.698 320.236 425.954 320.236C380.271 320.236 331.225 320.286 310.268 320.275C308.322 319.894 301.285 317.604 301.02 309.112L300.734 174.289C300.727 165.779 307.531 158.857 315.943 158.839C324.369 158.825 331.204 165.723 331.211 174.226C331.211 174.226 331.421 247.414 331.441 273.424C331.441 275.936 332.892 281.8 338.549 283.328C375.43 293.267 561.865 285.999 558.967 251.804C543.147 109.96 424.476 0 280.394 0C235.021 0 192.065 10.9162 154.026 30.2754C62.9934 77.5955 -1.65904 173.107 0.0324268 283.43C1.23215 361.622 52.2203 500.605 83.434 521.234C97.8202 530.749 116.765 527.228 201.484 527.228C239.903 527.228 275.679 527.355 293.26 527.436C295.087 527.782 304.671 530.001 304.671 538.907L304.894 641.393C304.915 649.907 298.104 656.826 289.678 656.829C281.266 656.843 274.434 649.953 274.42 641.446C274.42 641.446 275.17 600.322 275.17 584.985C275.17 581.435 275.424 575.339 265.178 570.727C231.432 555.553 121.849 564.712 115.701 581.457C113.347 587.899 125.599 612.801 144.459 644.731C170.102 685.624 211.889 747.245 245.601 792.625C261.047 813.417 268.77 823.813 280.467 824.101C292.165 824.389 300.514 814.236 317.213 793.928C383.012 713.909 516.552 537.663 542.92 388.542Z"
                fill="url(#paint0_linear_19447_66107)"
              ></path>
              <defs>
                <linearGradient
                  id="paint0_linear_19447_66107"
                  x1="445.629"
                  y1="63.8626"
                  x2="160.773"
                  y2="537.598"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#FF993A"></stop>
                  <stop offset="1" stop-color="#F15700"></stop>
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className="flex justify-center items-center gap-2">
            <div className="flex flex-col gap-1">
              <p className="font-bold text-[14px]">Other</p>
              <span className="bg-black w-[38px] h-[2px]"></span>
            </div>
            <FaAngleDown />
          </div>
        </div>
        <div className="md:hidden flex items-center">
          <button onClick={() => setIsOpen(!isOpen)}>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
        <div
          className={`w-full mx-1 md:flex md:items-center md:w-auto ${
            isOpen ? "opacity-100" : "hidden"
          } transition-all duration-300`}
        >
          <div className="flex flex-col md:flex-row gap-6 transition-all duration-300">
            <div className="flex items-center mr-4 gap-2 p-3 cursor-pointer">
              <IoSearch />
              <p>Search</p>
            </div>
            <div className="flex items-center mr-4 relative gap-2 p-3 cursor-pointer">
              <BiSolidOffer />
              <p>Offers</p>
              <p className="absolute -top-[10px] left-[60px] md:-right-[5px] text-[12px] text-blue-500">
                NEW
              </p>
            </div>
            <div className="flex items-center mr-4 gap-2 p-3">
              <NavLink
                to="/help"
                className="flex items-center gap-2 cursor-pointer"
              >
                <IoHelpBuoyOutline />
                <p>Help</p>
              </NavLink>
            </div>

            <button
              onClick={cartNavigateHandler}
              className="flex items-center mr-4 gap-2 cursor-pointer order-tab duration-300 p-3 rounded-md relative"
            >
              <CiShoppingCart />
              <p>Cart</p>
              <p className="absolute -top-[5px] max-md:left-[75px] md:right-[0px] font-bold text-lg text-black">
                {cart.length}
              </p>
            </button>
            <div>
              <button
                className="flex items-center mr-4 gap-2 cursor-pointer order-tab duration-300 p-3 rounded-md"
                onClick={orderNavigateHandler}
              >
                <IoBagOutline />
                Orders
              </button>
            </div>
            {token ? (
              <button
                onClick={logOutHandler}
                className="flex items-center mr-4 gap-2 cursor-pointer p-3 order-tab"
              >
                LogOut
              </button>
            ) : (
              <div
                onClick={signInHandler}
                className="flex items-center mr-4 gap-2 cursor-pointer p-3 order-tab"
              >
                <FaUser />
                <p>Sign In</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
