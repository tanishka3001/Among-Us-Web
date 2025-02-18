import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NotificationProvider, useNotification } from "./Components/NotificationProvider";
import SignUp from "./Components/signUp";
import Day from "./Components/day";
import NextPage from "./Components/nextPage";
import FirstPage from "./Components/first";
import ProtectRoutes from "./Components/protectRoutes";
import ProtectBooking from "./Components/protectBooking";
import Slots from "./Components/slots";
import Submission from "./Components/finalSubmission";
import Thankyou from "./Components/thankYou";
const App = () => {
    return (
       <NotificationProvider>
        <BrowserRouter>
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
            <Routes>
              <Route path="/sign-in" element={<SignUp />} /> 
              <Route element={<ProtectRoutes />}>
              <Route element={<ProtectBooking />}>
              <Route path="/day" element={<Day />} /> 
              </Route>
              </Route>
              <Route path="/nextpg" element={<NextPage />} /> 
              <Route path="/" element={<FirstPage />} /> 
              <Route element={<ProtectRoutes />}>
              <Route element={<ProtectBooking />}>
              <Route path="/slots" element={<Slots />} />  
              </Route>
              </Route>
              <Route element={<ProtectRoutes/>}>
              <Route path="/submission" element={<Submission />} />
              </Route>
              <Route path="/thank-you" element={<Thankyou />} />
            </Routes>
          </div>
        </BrowserRouter>
 </NotificationProvider>
      );
};     
export default App;
