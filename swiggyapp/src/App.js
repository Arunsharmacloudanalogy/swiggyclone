import { React } from "react";
import { Route, Routes } from "react-router-dom";
import CartPage from "./Page/CartPage.jsx";
import HomePage from "./Page/HomePage.jsx";
import HelpPage from "./Page/HelpPage.jsx";
import ItemPage from "./Page/ItemPage.jsx";
import SignInPage from "./Page/SignInPage.jsx";
import { Toaster } from "react-hot-toast";
import OrderPage from "./Page/OrderPage.jsx";
import offerdata from "./Data/offerdata.jsx";
import PaymentDetailsPage from "./Page/PaymentDetailsPage.jsx";
import Navbar from "./Components/Navbar.jsx";

const App = () => {
  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cart" element={<CartPage offer={offerdata} />} />
        <Route path="/help" element={<HelpPage />} />
        <Route path="/itempage" element={<ItemPage />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/order" element={<OrderPage />} />
        <Route path="/payment" element={<PaymentDetailsPage />} />
      </Routes>
    </>
  );
};

export default App;
