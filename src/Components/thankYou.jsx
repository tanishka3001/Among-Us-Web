import React,{useEffect,useState} from "react";
import Background from "./background";
import "../App.css";
import Header from "./header.jsx";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const Thankyou = () => {
    const navigate = useNavigate();
    const [data,setData]=useState([]);
    const[loading,setLoading]=useState(true);
    useEffect(() => {
        const fetchBooking = async () => {
            try {
                const response = await axios.get(`https://among-us-eosin.vercel.app/book`, {
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
    useEffect(() => {
        if (!loading &&  data.day===undefined ) {
           navigate("/day"); 
        }
    }, [loading, data, navigate]);
return(
    <div className="w-screen h-screen flex flex-col relative text-white overflow-hidden">
        <Background />
        <Header />
        <div className="flex flex-col z-10 items-center mt-20 md:mt-10">
            <p className="text-5xl md:text-7xl">Thank you</p>
            <p className="text-4xl md:text-5xl">for your response !</p>
            <div className="flex flex-col gap-5 md:gap-5 items-center">
                    <div>
                        <button className="bg-[#03CEA4] border-[#006450] border-4  mt-8 md:mt-10 text-white px-3 py-2 text-xl md:text-2xl rounded-xl">
                            {data.day}
                        </button></div>
                    <div>
                        <button className="bg-[#009ACF] border-[#004C67] border-4 text-white px-3 py-4 text-xl md:text-2xl rounded-xl">
                            {data.timing}
                        </button></div>
                </div>
            <p className="py-6 md:py-6 text-xl md:text-2xl">We'll see you there !</p>
            <button  onClick={()=>navigate("/gameroom")} className="bg-red-600 border-red-800 border-4 text-white px-2 py-2 text-lg md:text-2xl rounded-xl"> <FaArrowRight className="mx-2" /></button>
        </div>
    </div>
)
};
export default Thankyou;