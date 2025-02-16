import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "./Components/signUp"; 
import Day from "./Components/day"; 
import NextPage from "./Components/nextPage";
import FirstPage from "./Components/first";
import "./index.css";

const App = () => {
  return (
    <BrowserRouter>
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
        <Routes>
          <Route path="/sign" element={<SignUp />} /> 
          <Route path="/day" element={<Day />} /> 
          <Route path="/nextpg" element={<NextPage />} /> 
          <Route path="/" element={<FirstPage />} /> 
          
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
