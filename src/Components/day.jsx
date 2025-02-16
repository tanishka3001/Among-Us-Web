import React from "react";
import Background from "./background";
import "../App.css";
import Header from "./header.jsx";
//import { useNavigate } from "react-router-dom";
const Day = () => {
//const navigate = useNavigate();
return (
  
    <div className="w-screen h-screen flex flex-col items-center relative z-10 bg-black text-white overflow-hidden">
        <Background />
       <Header />
      <p className="text-lg mt-28 mb-4 relative z-10" >Choose what you opted for during registration</p>
      <div className="py-6 flex space-x-20 relative z-10">
        <div>
        <button className="bg-purple-500 border-purple-900 border-4 text-white text-xl px-6 py-3 rounded-lg shadow-md hover:bg-purple-600 mt-6  ">
          Day 1
        </button>
        </div>
        <div className="w-[2px] h-28  bg-gray-400"></div>
        <div>
        <button className="bg-purple-500 border-purple-900 border-4 text-white text-xl px-6 py-3 rounded-lg shadow-md hover:bg-purple-600 mt-6">
          Day 2
        </button>
        </div>
      </div>
      <div className="flex space-x-14 mt-6 relative z-10">
        <button className="bg-red-600 text-white px-10 py-1 rounded-xl shadow-md hover:bg-red-700">
          Back
        </button>
        <button className="bg-green-600 text-white px-10 py-1 rounded-xl shadow-md hover:bg-green-700">
          Next
        </button>
      </div>
    </div>
  );
};
export default Day;
