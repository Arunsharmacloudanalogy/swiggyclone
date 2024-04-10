import React from "react";
import Offer from "./Offer";
import offerdata from "../Data/offerdata";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
function Restaurants() {
 
  return (
    <div className="relative max-w-[1200px] px-3 mx-auto ">
      <h1 className="font-bold text-[25px] mb-5 mt-5">
        Top Restaurants in Delhi
      </h1>
      <div className="rest grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {offerdata.map((offer, index) => {
          return (
            <Offer
              key={index}
              offer={offer}
               
            />
          );
        })}
      </div>
    </div>
  );
}

export default Restaurants;
