import { Navigate, Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Background from "./background";
const ProtectBooking = () => {
  const token = localStorage.getItem("JWT_Token");
  const [hasBooking, setHasBooking] = useState(null);
  const[loading,setLoading]=useState(true);
  useEffect(() => {
    const checkBooking = async () => {
      try {
        const response = await axios.get("https://among-us-eosin.vercel.app/book", {
          headers: { Authorization: `Bearer ${token}` },
        });

        setHasBooking((response.data.timing) ? true : false);
        setLoading(false);
      } catch (error) {
        setHasBooking(false);
      }
    };

    checkBooking();
  }, [token]);
  if(loading){
    return(
      <div className="w-screen h-screen flex flex-col relative text-white overflow-hidden ">
            <Background />
            </div>
    )
  }
  if (hasBooking != null)
  return hasBooking ? <Navigate to="/thank-you" /> :<Outlet /> ;
};

export default ProtectBooking;
