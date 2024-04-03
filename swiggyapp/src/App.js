import { React } from "react";
import { Route, Routes } from "react-router-dom";
import CartPage from "./Page/CartPage.jsx";
import HomePage from "./Page/HomePage.jsx";
import HelpPage from "./Page/HelpPage.jsx";
import ItemPage from "./Page/ItemPage.jsx";
import SignInPage from "./Page/SignInPage.jsx";
import { Toaster } from "react-hot-toast";
const App = () => {
  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/help" element={<HelpPage />} />
        <Route path="/itempage" element={<ItemPage />} />
        <Route path="/signin" element={<SignInPage />} />
      </Routes>
    </>
  );
};

export default App;
