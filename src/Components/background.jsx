import React, { useEffect, useState } from "react";

const TwinklingStars = () => {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    const newStars = [];
    for (let i = 0; i < 200; i++) {
      newStars.push({
        id: i,
        top: Math.random() * 100,
        left: Math.random() * 100,
        duration: Math.random() * 5 + 1,
      });
    }
    setStars(newStars);
  }, []);

  return (
    <div className="absoulte  w-screen h-screen overflow-hidden bg-black absolute top-0 left-0">
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute bg-white w-[2px] h-[2px] rounded-full"
          style={{
            top: `${star.top}vh`,
            left: `${star.left}vw`,
            animation: `twinkling ${star.duration}s linear infinite`,
          }}
        />
      ))}
      <style>{`
        @keyframes twinkling {
          0% { opacity: 0; }
          50% { opacity: 1; }
          100% { opacity: 0; }
        }
      `}</style>
    </div>
  );
};

export default TwinklingStars;