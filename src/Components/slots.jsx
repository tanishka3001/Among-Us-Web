import React, { useEffect, useState } from "react";
import axios from "axios";
import Background from "./background";
import "../App.css";
import Header from "./header.jsx";
import { useNotification } from "./NotificationProvider.jsx";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const Slots = () => {
    const navigate = useNavigate();
    const notify=useNotification();
    const location = useLocation();
    const data = location.state;
    const [slots, setSlots] = useState([]);
    const [selectedSlot, setSelectedSlot] = useState(null);
    const handleSlotSelection = (slotId) => {
        setSelectedSlot(slotId);
    };
  

    const handleNext = () => {
        if (!selectedSlot) {
            notify("Please select a slot before proceeding.","warning"); 
        } else {
            navigate("/submission",{state: selectedSlot});
        }
    };

    useEffect(() => {
        const fetchSlots = async () => {
            try {
                const response = await axios.get(`https://among-us-eosin.vercel.app/slots/${data}`, {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("JWT_Token")}`
                    }
                });
                response.data.sort((a, b) => {
                    const timeToMinutes = (timeStr) => {
                        const [time, period] = timeStr.split(" ");
                        let [hours, minutes] = time.split(":").map(Number);
                        if (period === "PM" && hours !== 12) hours += 12;
                        if (period === "AM" && hours === 12) hours = 0;
                        return hours * 60 + minutes;
                    };

                    return timeToMinutes(a.timing.split(" - ")[0]) - timeToMinutes(b.timing.split(" - ")[0]);
                });
                setSlots(response.data);

            }
            catch (err) {
                console.log("Failed to fetch slots");
            }
        };
        if(data===null)
            navigate("/day");
        else
        fetchSlots();
    }, [data]);
    return (
        <div className="w-screen h-screen flex flex-col relative text-white overflow-hidden ">
            <Background />
            <Header />
            <div className="flex justify-center">
                <div className="flex flex-col md:flex-row z-10 text-xl md:text-5xl  mt-8 md:mt-12 md:space-x-4">
                    <p>Choose Your Slot</p>
                    {
                        slots.length === 0 ? "" :

                            <button className="bg-purple-500 border-purple-900 border-4 text-white text-xl md:text-3xl md:px-6  rounded-3xl shadow-md hover:bg-purple-600   ">
                                {slots.length === 0 ? " " : slots[0].day}
                            </button>
                    }
                </div>
            </div>
            <div className="flex justify-center items-center">
                <div className="flex flex-wrap w-1/2 justify-center text-center text-lg md:text-2xl relative z-10 pt-5 md:py-5 md:space-x-8 space-y-3">
                    {slots.map((slot, index) => (
                        <div key={slot.id} className="flex items-center md:space-x-2">
                            <input
                                type="radio"
                                id={`slot-${slot.id}`}
                                name="slotSelection"
                                checked={selectedSlot === slot.id}
                                onChange={() => handleSlotSelection(slot.id)}
                                className="hidden"
                            />
                            <label
                                htmlFor={`slot-${slot.id}`}
                                className={`cursor-pointer bg-[#009ACF] border-[#004C67] border-4 text-white px-6 py-2 rounded-xl shadow-md hover:bg-[#2587a7] ${selectedSlot === slot.id ? "bg-[#2587a7] border-[#85cde5]" : ""
                                    }`}
                            >
                                <p className="text-[#d2eff8]">Slot {index + 1}</p>
                                {slot.timing}
                                <span className="flex text-sm md:text-xl justify-center">
                                    Seats available:&nbsp;
                                    <p className="text-yellow-400">{slot.vacancies}</p>
                                </span>
                            </label>
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex justify-center">
                <div className="flex flex-col md:flex-row text-lg md:text-2xl  space-y-2 md:space-y-0 md:space-x-14 mt-8 relative z-10">
                    <button onClick={()=>navigate("/day")} className="bg-red-600 text-white px-10 py-1 rounded-xl shadow-md hover:bg-red-700">
                        Back
                    </button>
                    <button
                        className={`px-10 py-1 rounded-xl shadow-md ${selectedSlot
                                ? "bg-green-600 text-white hover:bg-green-700"
                                : "bg-gray-500 text-gray-300 cursor-not-allowed"
                            }`}
                        disabled={!selectedSlot}
                        onClick={handleNext}
                    >
                        Next
                    </button>
                </div>
            </div>
        </div>
    )

};
export default Slots;