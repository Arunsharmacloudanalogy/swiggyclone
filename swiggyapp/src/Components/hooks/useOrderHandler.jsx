import axios from "axios";
import { toast } from "react-hot-toast";
const useOrderHandler = () => {
  const orderHandler = (data) => {
    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "http://localhost:5000/data",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };
    axios
      .request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
        console.log("success");
        toast.success("Order Successful");
      })
      .catch((error) => {
        toast.error(error);
      });
  };

  return { orderHandler };
};
export default useOrderHandler;
