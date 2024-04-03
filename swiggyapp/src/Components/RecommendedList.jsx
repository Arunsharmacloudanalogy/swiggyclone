import React from "react";
import Recommended from "./Recommended";

function RecommendedList({ offer }) {
  let recommendedItem = offer.recommended;
  return (
    <div className="relative flex flex-col max-w-[1000px] mx-auto ">
      <h1 className="font-bold tracking-wide text-[1.2rem] my-2 px-[20px]">
        Recommended
      </h1>
      {recommendedItem.map((data) => (
        <Recommended data={data} offer={offer} />
      ))}
    </div>
  );
}

export default RecommendedList;
