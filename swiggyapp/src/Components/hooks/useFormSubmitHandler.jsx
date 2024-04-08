import axios from "axios";
import toast from "react-hot-toast";
// import CryptoJS from "crypto-js";
const useFormSubmitHandler = (formData) => {
  const submitHandler = (event, signup) => {
    event.preventDefault();
    const base64urlDecode = (str) => {
      str = str.replace(/-/g, "+").replace(/_/g, "/");
      while (str.length % 4 !== 0) {
        str += "=";
      }
      return atob(str);
    };

    const decodeJWT = (token) => {
      const parts = token.split(".");
      if (parts.length !== 3) {
        throw new Error("Invalid JWT format");
      }
      const decodedPayload = base64urlDecode(parts[1]);
      const payload = JSON.parse(decodedPayload);
      return payload;
    };
    let type = signup ? "signup" : "signin";
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
        localStorage.setItem("userId", response.data.data.id);
        // const bytes = CryptoJS.AES.decrypt(response.data.ciphertext, "arun");
        // const decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
        // decodeJWT(decryptedData);
        // toast.success("User created");
        // navigate("/");
      })
      .catch((error) => {
        toast.error(error);
        console.log(error);
      });
  };
  return { submitHandler };
};
export default useFormSubmitHandler;
