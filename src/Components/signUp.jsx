import React, { useEffect,useMemo, useState } from "react";
import { useNotification } from "./NotificationProvider.jsx";
import "../App.css";
import google from "../asset/Vectorgoogle.png";
import additionalImage from "../asset/AMONG_US_TEXT.png";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { auth, provider, signInWithPopup } from "./firebase";
import Header from "./header.jsx";

const SignUp = () => {
  const navigate= useNavigate();
  const notify = useNotification();
  const handleLogin = async () => {
    try {
        const result = await signInWithPopup(auth, provider);
        const user = result.user;
        const token = await user.getIdToken();
        localStorage.setItem("Token", token);
        notify("Please Wait, loading","success");
        const response = await axios.post(
          "https://among-us-eosin.vercel.app/auth" ,
            {}, 
            { headers: { Authorization: `Bearer ${token}` } }
        );
         if (response.status === 200) {
         
            localStorage.setItem("JWT_Token", response.data.token);
            const booking = await axios.get(`https://among-us-eosin.vercel.app/book`, {
              headers: {
                  Authorization: `Bearer ${localStorage.getItem("JWT_Token")}`
              }
          });
          if(booking.status===204 )
            navigate("/nextpg");
          else
          navigate("/thank-you");
         }

    } catch (error) {
        console.error("Login failed:", error);
        if (error.response) {         
            notify(`Error: ${error.response.data.message}`, "error");
        } else {
           notify("Login failed. Please try again.","error");
        }
    }
};
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
       
        <button onClick={handleLogin} className="relative flex mt-10 items-center justify-center px-8 bg-[#c01701] border-[7px] border-[#942336] rounded-full shadow-lg shadow-[#5a0f17]">
          <img src={google} alt="Description" className="w-8 sm:w-10 md:w-14 h-auto mr-4 md:mr-7" />
          <span className="text-[#ffcbd0] font-gratelos text-[2rem] sm:text-[3rem] md:text-[4rem] lg:text-[4rem] font-[400]">Sign in</span>
          <div className="absolute inset-0 rounded-full border-[10px] border-[#74202f] -z-10"></div>
        </button>
      </div>
    </div>
  );
};

export default SignUp;
