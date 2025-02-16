import React, { useMemo } from "react";

import "../App.css";
const NextPage = () => {  
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

      
      
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-black bg-opacity-80 px-10 py-4 flex items-center justify-center shadow-lg">
          <img 
            src="/header_final.png"  
            alt="Navbar Logo" 
            className="h-26 px-4 py-2 w-screen flex flex-col items-center"
          />
        </nav>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col justify-center items-center text-center px-6">
        <p className="text-white font-dmSans mt-20 text-2xl sm:text-4xl md:text-4xl leading-snug max-w-[1200px]">
          On the next page, you will be asked to pick a slot, <br />
          there are two days with six slots in each day. <br />
          Slots are on a <span className="font-semibold font-dmSans">first come first serve basis.</span> <br /><br />
          Make sure you are free during that slot. <br /><br />
          If you are coming with friends who have registered, <br />
          make them pick the same slot as you.
        </p>
        

        <button className="relative flex mt-10 items-center justify-center px-11  bg-[#c01701] border-[7px] border-[#942336] rounded-full shadow-lg shadow-[#5a0f17]">
          
          <span className="text-[#ffcbd0] font-gratelos text-[3rem] font-600">Next</span>
          <div className="absolute inset-0 rounded-full border-[10px] border-[#74202f] -z-10"></div>
        </button>
      </div>
    </div>
  );
};

export default NextPage; 
