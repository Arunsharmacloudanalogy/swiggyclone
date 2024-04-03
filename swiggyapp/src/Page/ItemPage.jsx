import React from "react";
import { useLocation } from "react-router-dom";
import ItemInfo from "../Components/ItemInfo";
const ItemPage = () => {
  const location = useLocation();
  const { offer } = location.state;

  return (
    <div>
      <ItemInfo offer={offer} />
    </div>
  );
};

export default ItemPage;
