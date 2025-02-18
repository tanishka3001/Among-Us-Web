import React, { useMemo } from "react";
import "../App.css";
import google from "../asset/Vectorgoogle.png";
import additionalImage from "../asset/AMONG_US_TEXT.png";
import Header from "./header.jsx";

const SignUp = () => {
  const stars = useMemo(() => {
    return Array.from({ length: 100 }, () => ({
      id: Math.random(),
      top: Math.random() * 100 + "vh",
      left: Math.random() * 100 + "vw",
      size: Math.random() * 2 + 1 + "px",
      animationDelay: Math.random() * 3 + "s",
    }));
  }, []);

  return (
    <div className="relative w-screen h-screen flex flex-col justify-center items-center overflow-hidden">
      {/* Twinkling Stars Background */}
      <div className="absolute inset-0 bg-black">
        {stars.map((star) => (
          <div
            key={star.id}
            className="absolute bg-white rounded-full opacity-0 animate-twinkle"
            style={{
              top: star.top,
              left: star.left,
              width: star.size,
              height: star.size,
              animationDelay: star.animationDelay,
            }}
          ></div>
        ))}
      </div>

      <div className="absolute top-0 left-0 w-full">
        <Header />
      </div>

      <div className="relative z-10 flex flex-col justify-center items-center "> 
        

        <img 
          src={additionalImage} 
          alt="Additional Visual" 
          className="block sm:hidden w-[80%] px-2 mb-3" 
        />

        <h1 className="text-white text-4xl px-2 font-gratelos sm:text-7xl md:text-6x1 lg:text-7xl xl:text-6xl font-[400] leading-none text-center">
          Sign in with your VIT Email ID
        </h1>

        
        <button className="relative flex mt-9 items-center justify-center px-5 bg-[#c01701] border-[7px] border-[#942336] rounded-full shadow-lg shadow-[#5a0f17]">
          <img src={google} alt="Description" className="w-9 sm:w-9 md:w-10 h-auto mr-4 md:mr-5" />
          <span className="text-[#ffcbd0] font-gratelos text-[3rem] sm:text-[3rem] md:text-[3rem] lg:text-[3rem] font-[400]">Sign in</span>
          <div className="absolute inset-0 rounded-full border-[7px] border-[#74202f] -z-10"></div>
        </button>
      </div>
    </div>
  );
};

export default SignUp;
