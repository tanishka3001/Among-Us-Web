import React from "react";
//import { useNavigate } from "react-router-dom";
const Day = () => {
//const navigate = useNavigate();
return (
    <div className="w-screen h-screen flex flex-col items-center  bg-black text-white">
        <img src="./Group 48095351.png" alt="iste logo" className="px-4 py-2"></img>
      <p className="text-lg mt-32 mb-4">Choose what you opted for during registration</p>
      <div className="flex space-x-8">
        <button className="bg-purple-500 text-white text-xl px-6 py-3 rounded-lg shadow-md hover:bg-purple-600">
          Day 1
        </button>
        <button className="bg-purple-500 text-white text-xl px-6 py-3 rounded-lg shadow-md hover:bg-purple-600">
          Day 2
        </button>
      </div>
      <div className="flex space-x-4 mt-6">
        <button className="bg-red-600 text-white px-6 py-2 rounded-lg shadow-md hover:bg-red-700">
          Back
        </button>
        <button className="bg-green-600 text-white px-6 py-2 rounded-lg shadow-md hover:bg-green-700">
          Next
        </button>
      </div>
    </div>
  );
};
export default Day;
