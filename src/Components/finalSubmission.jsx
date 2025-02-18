import React, { useEffect,useState } from "react";
import Background from "./background";
import "../App.css";
import Header from "./header.jsx";
import axios from "axios";
import {useNavigate, useLocation} from "react-router-dom";

const Submission = () => {
    const navigate = useNavigate();
    const location= useLocation();
    const slotId= location.state;
    const [data,setData]=useState([]);
    const[loading,setLoading]=useState(true);
    const bookSlot = async()=>{
        try {
            const response = await axios.post("https://among-us-eosin.vercel.app/book", {"slotId": slotId }, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("JWT_Token")}`
                },

            });
            if (response.status === 201){
                navigate("/thank-you");
            }
        }
        catch (err) {
            console.log(err);
        }
    }
    useEffect(() => {
        const fetchBooking = async () => {
            try {
                const response = await axios.get(`https://among-us-eosin.vercel.app/slots/slot/${slotId}`, {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("JWT_Token")}`
                    }
                });
                setData(response.data);
            }
            catch (err) {
                console.log(err);
            }
            finally{
                setLoading(false);
            }
        };
        fetchBooking();
    }, []);
    return (
        <div className="w-screen h-screen flex flex-col relative bg-black text-white overflow-hidden">
            <Background />
            <Header />
                <div className="flex flex-col md:flex-row justify-center items-center z-10 md:space-x-20">
                    <div className="flex flex-col  items-center space-y-2">
                        <p className=" mt-8 md:mt-20 text-7xl md:text-9xl">
                            FINAL
                        </p>
                    <p className="text-6xl md:text-8xl">
                        SUBMISSION
                    </p>
                </div>
            <div className="flex flex-col gap-5 md:gap-14 items-center">
                    <div>
                        <button className="bg-[#03CEA4] border-[#006450] border-4  mt-8 md:mt-28 text-white px-3 py-2 text-4xl md:text-5xl rounded-xl">
                            {data.length===0?"":data[0].day}
                        </button></div>
                    <div>
                        <button className="bg-[#009ACF] border-[#004C67] border-4 text-white px-3 py-4 text-2xl md:text-4xl rounded-xl">
                            {data.length===0?"":data[0].timing}<br></br>
                            <span className="flex text-sm md:text-xl justify-center">
                            Seats available:&nbsp;
                                    <p className="text-yellow-400">{data.length===0?"":data[0].vacancies}</p>
                                    </span>
                        </button></div>
                </div>
            </div>
            <div className="flex justify-center mt-8">
                <div className="flex flex-col md:flex-row text-lg md:text-2xl py-6 md:py-0 space-y-4 md:space-y-0 md:space-x-14 mt-0 md:mt-8 relative z-10">
                    <button onClick={()=>navigate("/slots")} className="bg-red-600 text-white px-10 py-1 rounded-xl shadow-md hover:bg-red-700">
                        Back
                    </button>
                    <button onClick={bookSlot}
                        className="px-10 py-1 rounded-xl shadow-md bg-green-600 text-white hover:bg-green-700">
                        Next
                    </button>
                </div>
            </div>
            </div>    
    )
};
export default Submission;