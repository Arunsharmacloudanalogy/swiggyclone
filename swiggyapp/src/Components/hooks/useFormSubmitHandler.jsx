import axios from "axios";
import toast from "react-hot-toast";
import Cookies from "js-cookie";
// import CryptoJS from "crypto-js";
const useFormSubmitHandler = (formData) => {
  const submitHandler = (event, signup) => {
    event.preventDefault();

    let type = signup ? "signup" : "signin";
    const expirationDate = new Date();
    expirationDate.setTime(expirationDate.getTime() + 10000);
    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: `http://localhost:4000/${type}`,
      headers: {
        "Content-Type": "application/json",
      },
      data: formData,
    };
    axios
      .request(config)
      .then((response) => {
        if (type === "signin") {
          Cookies.set("Token", response.data.token, {
            expires: expirationDate,
          });
          Cookies.set("Id", response.data.user.id);
        }
      })
      .catch((error) => {
        toast.error(error);
        console.log(error);
      });
  };
  return { submitHandler };
};
export default useFormSubmitHandler;
