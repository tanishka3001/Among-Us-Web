import { Navigate, Outlet } from "react-router-dom";
import {useEffect, useState} from "react";
import Background from "./background";
const ProtectRoutes=()=>{
const token= localStorage.getItem("JWT_Token");
const[loading,setLoading]=useState(true);
useEffect(()=>{
    setLoading(false);
},[]);
if(loading){
    return(
        <div className="w-screen h-screen flex flex-col relative text-white overflow-hidden ">
            <Background />
            </div>
);
}
return token?<Outlet />:<Navigate to="/sign-in" />;
};
export default ProtectRoutes;