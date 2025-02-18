import React, { useState } from "react";
import Background from "./background";
import "../App.css";
import Header from "./header.jsx";
import { useNavigate } from "react-router-dom";
const Day = () => {
  const navigate = useNavigate();
  const [selectedDay, setSelectedDay] = useState(null);

  const handleSelection = (day) => {
    setSelectedDay(day);
  };

  const handleNext = () => {
    if (!selectedDay)
      alert("Please select one day before proceeding.");
    else {
      console.log(selectedDay);
      navigate("/slots", { state: selectedDay });
    }
  };

  return (
    <div className="w-screen h-screen flex flex-col relative z-10 bg-black text-white overflow-hidden">
      <Background />
      <Header />
      <div className="flex flex-col items-center z-10">
        <p className="text-3xl md:text-5xl text-center mt-28 mb-4 relative z-10">
          Choose what you opted for during registration
        </p>

        <div className="py-3 md:py-6 flex flex-col md:flex-row md:space-x-20  relative z-10">
          <div className="mt-6 mb-6">
            <input
              type="radio"
              id="day1"
              name="selectedDay"
              className="hidden"
              checked={selectedDay === "1"}
              onChange={() => handleSelection("1")}
            />
            <label
              htmlFor="day1"
              className={`cursor-pointer bg-purple-500 border-purple-900 border-4 text-white text-3xl md:text-4xl px-6 py-3 rounded-lg shadow-md hover:bg-purple-600 ${selectedDay === "1" ? "bg-purple-700 border-purple-400" : ""
                }`}
            >
              Day 1
            </label>
          </div>

          <div className="hidden md:block w-[2px] h-28 bg-gray-400"></div>

          <div className="mt-6">
            <input
              type="radio"
              id="day2"
              name="selectedDay"
              className="hidden"
              checked={selectedDay === "2"}
              onChange={() => handleSelection("2")}
            />
            <label
              htmlFor="day2"
              className={`cursor-pointer bg-purple-500 border-purple-900 border-4 text-white text-3xl md:text-4xl px-6 py-3 rounded-lg shadow-md hover:bg-purple-600 ${selectedDay === "2" ? "bg-purple-700 border-purple-400" : ""
                }`}
            >
              Day 2
            </label>
          </div>
        </div>
        <div className="flex flex-col md:flex-row text-lg md:text-2xl py-6 md:py-0 space-y-4 md:space-y-0 md:space-x-14 mt-6 relative z-10">
          <button onClick={()=>navigate("/nextpg")} className="bg-red-600 text-white px-10 py-1 rounded-xl shadow-md hover:bg-red-700">
            Back
          </button>
          <button
            className={`px-10 py-1 rounded-xl shadow-md ${selectedDay
                ? "bg-green-600 text-white hover:bg-green-700"
                : "bg-gray-500 text-gray-300 cursor-not-allowed"
              }`}
            disabled={!selectedDay}
            onClick={handleNext}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Day;
