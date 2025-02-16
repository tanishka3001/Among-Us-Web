import React from "react";
import Slots from "./Components/slots";
import Submission from "./Components/finalSubmission";
import Thankyou from "./Components/thankYou";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
const App = () => {
    return (
        <BrowserRouter>
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
            <Routes>
              <Route path="/" element={<Slots />} />  
              <Route path="/submission" element={<Submission />} />
              <Route path="/thank-you" element={<Thankyou />} />
            </Routes>
          </div>
        </BrowserRouter>
      );
};
export default App;