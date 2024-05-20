import React, { useState } from "react";
import useFormSubmitHandler from "../Components/hooks/useFormSubmitHandler";
import { useNavigate } from "react-router";
import toast from "react-hot-toast";
import Spinner from "../Components/Spinner";

const SignInPage = () => {
  const navigate = useNavigate();

  const [signup, setSignUp] = useState(true);
  const [loading, setLoading] = useState(false);
  const [formData, setFromData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const successHandler = (data) => {
    console.log("here");
    if (data) {
      navigate("/");
    } else {
      navigate("/signin");
    }
  };
  const { submitHandler } = useFormSubmitHandler(
    formData,
    successHandler,
    setLoading
  );

  const dataSubmitHandler = (e) => {
    setLoading(true);
    submitHandler(e, signup);

    //  navigate("/")
    //  navigate("/signin");
  };
  const changeHandler = (event) => {
    const { name, value } = event.target;

    setFromData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const authToggle = () => {
    setSignUp(!signup);
  };

  return (
    <div class="bg-gray-200 min-h-screen flex items-center justify-center">
      <div class="bg-white p-8 rounded-lg shadow-md max-w-md w-full">
        <h2 class="text-2xl font-semibold mb-4">
          {signup ? "Sign Up" : "Login"}
        </h2>
        <form onSubmit={(event) => dataSubmitHandler(event)}>
          {signup ? (
            <div class="mb-4">
              <label for="name" class="block text-gray-700">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={changeHandler}
                class="w-full px-4 py-2 rounded-lg border focus:outline-none focus:border-blue-500"
              />
            </div>
          ) : (
            ""
          )}
          <div class="mb-4">
            <label for="email" class="block text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={changeHandler}
              class="w-full px-4 py-2 rounded-lg border focus:outline-none focus:border-blue-500"
            />
          </div>
          <div class="mb-4">
            <label for="password" class="block text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Your Password"
              onChange={changeHandler}
              class="w-full px-4 py-2 rounded-lg border focus:outline-none focus:border-blue-500"
            />
          </div>
          <div class="mb-4">
            <button
              type="submit"
              disabled={loading}
              class="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none"
            >
              {loading ? <Spinner /> : signup ? "Sign up" : "Login"}
            </button>
          </div>
        </form>
        <div className="flex gap-3 ">
          <p>Already a user? </p>
          <button className="cursor-pointer" onClick={authToggle}>
            { signup ? "Signin" : "Signup"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
