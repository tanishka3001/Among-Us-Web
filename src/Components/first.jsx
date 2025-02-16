import React, { useMemo, useState, useEffect } from "react";
import { motion } from "framer-motion";
import "../App.css";
import textImg from "../asset/AMONG_US_TEXT.png";

const FirstPage = () => {
  const [animate, setAnimate] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const [initialEase, setInitialEase] = useState(false);

  useEffect(() => {
    const startAnimation = () => {
      setInitialEase(true);
      setTimeout(() => {
        setAnimate(true);
      }, 500);
    };

    window.addEventListener("keydown", startAnimation);
    window.addEventListener("touchstart", startAnimation);
    window.addEventListener("mousedown", startAnimation);

    return () => {
      window.removeEventListener("keydown", startAnimation);
      window.removeEventListener("touchstart", startAnimation);
      window.removeEventListener("mousedown", startAnimation);
    };
  }, []);

  useEffect(() => {
    if (animate) {
      const timer = setTimeout(() => setShowButton(true), 1500);
      return () => clearTimeout(timer);
    }
  }, [animate]);

  const stars = useMemo(() => {
    return Array.from({ length: 100 }, () => ({
      id: Math.random(),
      top: Math.random() * 100 + "vh",
      left: Math.random() * 100 + "vw",
      size: Math.random() * 5 + 3 + "px",
      animationDelay: Math.random() * 4 + "s",
    }));
  }, []);

  const textVariants = {
    initial: { scale: 1, y: 0 },
    easeInOutBack: {
      scale: 1.08,
      y: 2,
      transition: { duration: 0.15, ease: "easeInOut" },
    },
    forward: {
      scale: 1.8,
      y: -10,
      transition: { duration: 0.4, ease: "easeOut" },
    },
    backward: {
      scale: 0.5,
      y: -20,
      transition: { duration: 1.2, ease: "easeInOut" },
    },
  };

  const imageVariants = {
    initial: { scale: 1, y: 0 },
    easeInOutBack: {
      scale: 0.95,
      y: -2,
      transition: { duration: 0.15, ease: "easeInOut" },
    },
    backward: {
      scale: 0.7,
      y: 10,
      transition: { duration: 0.4, ease: "easeOut" },
    },
    animate: {
      scale: 1.8,
      y: 15,
      transition: { duration: 1.2, ease: "easeInOut" },
    },
  };

  return (
    <div className="relative w-screen h-screen flex flex-col justify-center items-center overflow-hidden">
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

      <nav className="fixed top-0 left-0 w-full bg-black bg-opacity-80 px-10 py-4 flex items-center justify-center shadow-lg">
        <img 
          src="/header_final.png"  
          alt="Navbar Logo" 
          className="h-26 px-4 py-2 w-screen flex flex-col items-center"
        />
      </nav>

      <div className="relative z-10 flex flex-col mt-20 md:mt-28 justify-center items-center text-center px-4 md:px-6">
        <motion.p
          className="text-white font-gratelos text-7xl md:text-9xl font-light w-full md:w-[46.7rem]"
          variants={textVariants}
          initial="initial"
          animate={
            initialEase
              ? ["easeInOutBack", animate && "forward", animate && "backward"]
              : "initial"
          }
        >
          Welcome to
        </motion.p>

        <motion.img
          src={textImg}
          alt="Description"
          className="max-w-[17rem] md:max-w-[30rem] h-auto mb-16 md:mb-28"
          variants={imageVariants}
          initial="initial"
          animate={
            initialEase
              ? ["easeInOutBack", animate && "backward", animate && "animate"]
              : "initial"
          }
        />

        <motion.div
          className={`relative transition-opacity duration-500 ease-in-out ${
            showButton ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
        >
          <motion.button
            className="relative flex items-center justify-center py-4 md:py-8 px-6 md:px-11 bg-[#c01701] border-[4px] md:border-[7px] border-[#942336] rounded-full shadow-lg shadow-[#5a0f17]"
          >
            <span className="text-[#ffcbd0] font-gratelos px-3 md:px-4 text-4xl md:text-[5rem] font-600">
              Start
            </span>
            <div className="absolute inset-0 rounded-full border-[6px] md:border-[10px] border-[#74202f] -z-10"></div>
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default FirstPage;
