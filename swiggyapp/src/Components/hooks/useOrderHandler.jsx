import axios from "axios";
import { toast } from "react-hot-toast";
const useOrderHandler = () => {
  const orderHandler = (data) => {
    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "http://localhost:4000/addOrder",
      headers: {
        "Content-Type": "application/json",
        
      },
      data: data,
    };
    axios
      .request(config)
      .then((response) => {
        toast.success("Order Successful");
      })
      .catch((error) => {
        toast.error(error);
      });
  };

  return { orderHandler };
};
export default useOrderHandler;
