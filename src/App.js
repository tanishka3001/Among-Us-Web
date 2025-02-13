import React from "react";
import Day from "./Components/day";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
const App = () => {
    return (
        <BrowserRouter>
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
            <Routes>
              <Route path="/" element={<Day />} />  
            </Routes>
          </div>
        </BrowserRouter>
      );
};
export default App;