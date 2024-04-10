import React from "react";
import Suggestion from "../Components/Suggestion";
import Restaurants from "../Components/Restaurants";
import Footer from "../Components/Footer";

const HomePage = () => {
  return (
    <div>
      {/* <Navbar /> */}
      <Suggestion />
      <Restaurants />
      <Footer />
    </div>
  );
};

export default HomePage;
