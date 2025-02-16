import React from "react";
import Background from "./background";
import "../App.css";
import Header from "./header.jsx";

const Submission = () => {
return(
    <div className="w-screen h-screen flex flex-col relative bg-black text-white overflow-hidden">
        <Background />
        <Header />
    </div>
)
};
export default Submission;