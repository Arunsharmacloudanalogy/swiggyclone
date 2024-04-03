import React, { useState } from "react";
import useFormSubmitHandler from "../Components/hooks/useFormSubmitHandler";

const SignInPage = () => {
  const [formData, setFromData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const { submitHandler } = useFormSubmitHandler(formData);
 
  const dataSubmitHandler = (e) => {
    submitHandler(e);
  };
  const changeHandler = (event) => {
    const { name, value } = event.target;
    setFromData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  return (
    <div class="bg-gray-200 min-h-screen flex items-center justify-center">
      <div class="bg-white p-8 rounded-lg shadow-md max-w-md w-full">
        <h2 class="text-2xl font-semibold mb-4">Sign Up</h2>
        <form onSubmit={(event) => dataSubmitHandler(event)}>
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
              class="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none"
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignInPage;
