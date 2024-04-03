import axios from "axios";
import toast from "react-hot-toast";
import CryptoJS from "crypto-js";
const  useFormSubmitHandler = (formData) => {
  const submitHandler = (event) => {
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

    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "http://localhost:5000/signin",
      headers: {
        "Content-Type": "application/json",
      },
      data: formData,
    };
    axios
      .request(config)
      .then((response) => {
        const bytes = CryptoJS.AES.decrypt(response.data.ciphertext, "arun");
        const decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
        decodeJWT(decryptedData);
      })
      .catch((error) => {
        toast.error(error);
      });
  };
  return { submitHandler };
};
export default useFormSubmitHandler