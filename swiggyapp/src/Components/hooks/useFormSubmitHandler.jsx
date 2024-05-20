import axios from "axios";
import toast from "react-hot-toast";
import Cookies from "js-cookie";
const useFormSubmitHandler = (formData, callback, setLoading) => {
  const submitHandler = (event, signup) => {
    event.preventDefault();
    let type = signup ? "signup" : "signin";
    const expirationDate = new Date();
    expirationDate.setTime(expirationDate.getTime() + 3 * 60 * 60 * 1000);
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
        console.log("type is ", type);
        if (type === "signin") {
          Cookies.set("Token", response.data.token, {
            expires: expirationDate,
          });
          Cookies.set("Id", response.data.user.id);

          toast.success("Loggedin...");
        } else {
          toast.success("User created..");
        }
        callback(response.data);
        setLoading(false);
      })
      .catch((error) => {
        if (error.response && error.response.status === 400) {
          toast.error(error.response.data.message);
        } else if (error.response && error.response.status === 403) {
          toast.error("Password is incorrect");
        } else {
          toast.error("Something went wrong ");
        }
        console.log(error);
        setLoading(false);
      });
  };

  return { submitHandler };
};
export default useFormSubmitHandler;
