import React, { useMemo } from "react";
import "../App.css";
import google from "../asset/Vectorgoogle.png";
import additionalImage from "../asset/AMONG_US_TEXT.png";

const SignUp = () => {
  const stars = useMemo(() => {
    return Array.from({ length: 100 }, () => ({
      id: Math.random(),
      top: Math.random() * 100 + "vh",
      left: Math.random() * 100 + "vw",
      size: Math.random() * 5 + 3 + "px",
      animationDelay: Math.random() * 4 + "s",
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

      
      <div className="relative z-10 flex flex-col justify-center items-center">
      
        <nav className="fixed top-0 left-0 w-full bg-black bg-opacity-80 px-10 py-4 flex items-center justify-center shadow-lg">
          <img 
            src="/header_final.png"  
            alt="Navbar Logo" 
            className="h-26 px-4 py-2 w-screen flex flex-col items-center"
          />
        </nav>

        <img 
          src={additionalImage} 
          alt="Additional Visual" 
          className="block sm:hidden w-[70%] px-2 mb-14" 
        />



        <h1 className="text-white text-3xl px-2 font-gratelos sm:text-4xl md:text-4x1 lg:text-6xl xl:text-6xl font-[400] leading-none text-center mt-[-60px]">
          Sign in with your VIT Email ID
        </h1>

       
        <button className="relative flex mt-9 items-center justify-center px-5 bg-[#c01701] border-[7px] border-[#942336] rounded-full shadow-lg shadow-[#5a0f17]">
          <img src={google} alt="Description" className="w-7 sm:w-8 md:w-10 h-auto mr-4 md:mr-5" />
          <span className="text-[#ffcbd0] font-gratelos text-[2rem] sm:text-[2rem] md:text-[3rem] lg:text-[3rem] font-[400]">Sign in</span>
          <div className="absolute inset-0 rounded-full border-[7px] border-[#74202f] -z-10"></div>
        </button>
      </div>
    </div>
  );
};

export default SignUp;
