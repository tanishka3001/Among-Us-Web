import React, {useEffect, useState} from "react";
import axios from "axios";
import Background from "./background";
import "../App.css";
import Header from"./header.jsx";
const Slots = () => {
    const [slots, setSlots]=useState([]);
    useEffect(()=>{
        const fetchSlots= async ()=>{
            try{
                const response = await axios.get("process.env.REACT_APP_slotUrl",{
                    headers:{
                        Authorization: `Bearer ${localStorage.getItem("Token")}`
                    }
                });
                setSlots(response.data);
            }
            catch (err) {
                console.log( "Failed to fetch slots");
            } 
        };
        fetchSlots();
    },[]);
    return (
        <div className="w-screen h-screen flex flex-col  relative  bg-black text-white overflow-hidden">
            <Background />
            <Header />
            <div className="flex justify-center">
            <div className="flex flex-col md:flex-row z-10 text-xl md:text-5xl mt-20 space-x-4">
                <p>Choose Your Slot</p>
                <button className="bg-purple-500 border-purple-900 border-4 text-white text-xl md:text-3xl px-6 py-1 rounded-3xl shadow-md hover:bg-purple-600   ">
                    Day 1
                </button>
            </div>
            </div>
            <div className=" relative z-10 ">
                {slots.map((slot) => (
                    <button
                        key={slot.id}
                        className="bg-blue-500 border-blue-900 border-4 text-white px-6 py-2 rounded-xl shadow-md hover:bg-blue-600 "
                    >
                        {slot.timing}
                    </button>
                ))}
            </div>
        </div>
    )

};
export default Slots;