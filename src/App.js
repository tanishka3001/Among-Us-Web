import React from "react";
import Slots from "./Components/slots";
import Submission from "./Components/finalSubmission";
import Thankyou from "./Components/thankYou";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "./Components/signUp"; 
import Day from "./Components/day"; 
import NextPage from "./Components/nextPage";
import FirstPage from "./Components/first";


const App = () => {
    return (
        <BrowserRouter>
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
            <Routes>
              <Route path="/sign" element={<SignUp />} /> 
              <Route path="/day" element={<Day />} /> 
              <Route path="/nextpg" element={<NextPage />} /> 
              <Route path="/" element={<FirstPage />} /> 
              <Route path="/slots" element={<Slots />} />  
              <Route path="/submission" element={<Submission />} />
              <Route path="/thank-you" element={<Thankyou />} />
            </Routes>
          </div>
        </BrowserRouter>
      );           
};

export default App;
