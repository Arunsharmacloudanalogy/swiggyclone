import axios from "axios";
import Cookies from "js-cookie";
import { toast } from "react-hot-toast";
const useOrderHandler = () => {
  const orderHandler = (data) => {

    const token = Cookies.get('Token');
    console.log('token here ' , token);
    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "http://localhost:4000/addOrder",
      headers: {
        "Content-Type": "application/json",
        'Authorization': `Bearer ${token}`
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
