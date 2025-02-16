import React from "react";
import Background from "./background";
import "../App.css";
import Header from "./header.jsx";

const Thankyou = () => {
return(
    <div className="w-screen h-screen flex flex-col relative text-white overflow-hidden">
        <Background />
        <Header />
        <div className="flex flex-col z-10 items-center mt-28">
            <p className="text-5xl md:text-9xl">Thank you</p>
            <p className="text-2xl md:text-6xl">for your response !</p>
            <p className="py-12 md:py-20 text-xl md:text-3xl">We'll see you there !</p>
        </div>
    </div>
)
};
export default Thankyou;