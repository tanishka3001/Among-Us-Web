import React, { useEffect } from "react";
import { IoCloseSharp } from "react-icons/io5";

export default function Notification({ message, show, closeNotification, color }) {
  useEffect(() => {
    if (show) {
      const timer = setTimeout(() => {
        closeNotification();
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [show, closeNotification]);

  if (!show) return null;

  return (
    <div
      className={`fixed top-5  right-5 z-50 max-w-xs md:max-w-sm px-5 py-3 rounded-lg shadow-lg text-white flex items-center justify-between gap-4 transition-transform duration-500 ease-in-out ${
        show ? "translate-x-0 opacity-100" : "translate-x-20 opacity-0"
      }`}
      style={{
        backgroundColor: color,
        backdropFilter: "blur(10px)",
      }}
    >
      <p className="text-sm md:text-base font-medium">{message}</p>
      <button onClick={closeNotification} className="text-white font-dmSans">
        <IoCloseSharp className="text-xl hover:scale-110 transition-transform" />
      </button>
    </div>
  );
}
