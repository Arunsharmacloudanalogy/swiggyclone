import React from "react";
import { motion } from "framer-motion";
const HelpPage = () => {
  return (
    <motion.div
      className="flex flex-col justify-center items-center min-h-screen bg-gray-100"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="max-w-lg w-full bg-white rounded-lg shadow-lg p-8"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 120 }}
      >
        <h1 className="text-3xl font-bold mb-4">Help Page</h1>
        <p className="text-gray-700 mb-6">
          Welcome to our help page! If you need assistance or have any
          questions, feel free to reach out to our developer.
        </p>
        <div className="flex items-center space-x-4">
          <motion.img
            src="../../public/developer.png"
            alt="Developer Avatar"
            className="w-12 h-12 rounded-full"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2 }}
          />
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <h2 className="font-semibold">Arun sharma</h2>
            <p className="text-gray-600">Web Developer</p>
            <p className="text-blue-600">arun.sharma@cloudanalogy.com</p>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default HelpPage;
