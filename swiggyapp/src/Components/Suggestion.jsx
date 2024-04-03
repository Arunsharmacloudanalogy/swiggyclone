import React from "react";
import suggData from "../Data/suggestion";
import Item from "./Dish";
function Suggestion() {
  return (
    <div className="mt-3 max-w-[1200px] mx-auto relative flex-col justify-center items-center border-b-2 border-gray-200 py-7">
      <h1 className="text-[25px] mx-auto max-w-[1200px] font-bold">
        What's on your mind?
      </h1>

      <div className="flex justify-center items-center ">
        {suggData.map((item) => {
          return <Item title={item.title} image={item.image} />;
        })}
      </div>
    </div>
  );
}

export default Suggestion;
