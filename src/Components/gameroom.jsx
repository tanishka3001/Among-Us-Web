import React, { useEffect, useState } from "react";
import Background from "./background";
import { useNavigate } from "react-router-dom";
import "../App.css";
import Header from "./header.jsx";
import axios from "axios";
const Gameroom = () => {
    const navigate = useNavigate();
    const [role, setRole] = useState([]);
    const [error, setError] = useState(null);
    useEffect(() => {
        const fetchRoles = async () => {
            try {
                const response = await axios.get(`https://among-us-eosin.vercel.app/gameroom/showRoles`, {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("JWT_Token")}`
                    }
                });
                console.log(response.data);
                setRole(response.data);
            }
            catch (err) {
                console.log(err);
                if (err.status === 404)
                    setError(true);
            }
        };
        fetchRoles();
    }, []);
    const impostersArray = Array.isArray(role.imposters) ? role.imposters : Object.values(role.imposters ?? {});
    if (error)
        return (
            <div className="w-screen h-screen flex flex-col relative text-white overflow-hidden">
                <Background />
                <Header />
                <p className="flex justify-center text-4xl md:text-6xl mt-36 z-10">Nothing To See Here 😶‍🌫️</p>
                <div className="z-10 flex justify-center mt-10">
                    <button onClick={() => navigate("/thank-you")} className="bg-red-600 text-2xl text-white px-10 py-1 rounded-xl shadow-md hover:bg-red-700 ">
                        Back
                    </button>
                </div>
            </div>
        )
    if (role.message === 'You are a Crewmate')
        return (
            <div className="w-screen h-screen flex flex-col relative text-white overflow-hidden">
                <Background />
                <Header />
                <div className="flex justify-center z-10">
                    {role.length === 0 ? "" :
                        <button className="bg-[#27A5EF] border-[#235b7b] border-4  mt-28 md:mt-10 text-white px-3 py-2 text-xl md:text-3xl rounded-xl">
                            {role.length === 0 ? "" : role.message}
                        </button>
                    }
                      <div className="z-10 flex justify-center py-3">
                    <button onClick={() => navigate("/thank-you")} className="bg-red-600 text-xl text-white px-6 py-1 rounded-xl shadow-md hover:bg-red-700 ">
                        Back
                    </button>
                </div>
                </div>
            </div>
        )
    return (
        <div className="w-screen h-screen flex flex-col relative text-white overflow-hidden">
            <Background />
            <Header />
            <div className="flex flex-col items-center z-10 mt-20">
                {role.length === 0 ? "" :
                    <button className="bg-[#27A5EF] border-[#235b7b] border-4 text-white px-4 py-2 text-xl md:text-3xl rounded-xl">
                        {role.length === 0 ? "" : role.message}
                    </button>
                }
                <div className="flex flex-col items-center mt-6 space-y-2">
                    {role.length===0 ?"":
                        <p className="text-2xl">Other Imposters:</p>
                       }
                    <div className="flex flex-col gap-2 md:flex-row md:gap-4 md:py-2 md:justify-center md:flex-wrap md:w-1/2">
                        {impostersArray.map((imposter,index) => (
                            <button key={index} className="bg-[#27A5EF] border-[#235b7b] border-4 text-white px-4 py-2 text-lg rounded-lg">
                                Number {typeof imposter === "object" ? imposter.number : imposter}
                            </button>
                        ))}
                    </div>
                    <div className="z-10 flex justify-center py-3">
                    <button onClick={() => navigate("/thank-you")} className="bg-red-600 text-xl text-white px-6 py-1 rounded-xl shadow-md hover:bg-red-700 ">
                        Back
                    </button>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Gameroom;