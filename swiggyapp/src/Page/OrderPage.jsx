import React, { useState, useEffect } from "react";
import axios from "axios";
import OrderCard from "../Components/OrderCard";

function OrderPage() {
  const [orders, setOrders] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    //get all the orders from db
    let userId = localStorage.getItem("userId");
    console.log(`http://localhost:4000/getOrder/${userId}`);
    const fetchOrders = async () => {
      try {
        // Using axios to fetch data from the server
        const response = await axios.get(
          `http://localhost:4000/getOrder/${userId}`
        );
        setOrders(response.data);
      } catch (error) {
        console.error("Failed to fetch orders:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchOrders();
  }, []);
  if (isLoading) {
    return <div>Loading orders...</div>;
  }
  return (
    <div>
      {orders.map((order) => (
        <OrderCard key={order.id} order={order} />
      ))}
    </div>
  );
}

export default OrderPage;
