import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NotificationProvider, useNotification } from "./Components/NotificationProvider";
import SignUp from "./Components/signUp";
import Day from "./Components/day";
import NextPage from "./Components/nextPage";
import FirstPage from "./Components/first";
import Slots from "./Components/slots";
import Submission from "./Components/finalSubmission";
import Thankyou from "./Components/thankYou";

const TestComponent = () => {
  const notify = useNotification();

  return (
    <div className="p-5">
      <button onClick={() => notify("✅ Login Successful", "success")} className="bg-green-500 px-4 py-2 rounded text-white">Success</button>
      <button onClick={() => notify("⚠️ Warning ", "warning")} className="bg-yellow-500 px-4 py-2 rounded text-white ml-2">Warning</button>
      <button onClick={() => notify("❌ Error !", "error")} className="bg-red-500 px-4 py-2 rounded text-white ml-2">Error</button>
    </div>
  );
};

const App = () => (
  <NotificationProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FirstPage />} />
        <Route path="/sign" element={<SignUp />} />
        <Route path="/day" element={<Day />} />
        <Route path="/nextpg" element={<NextPage />} />
        <Route path="/slots" element={<Slots />} />
        <Route path="/submission" element={<Submission />} />
        <Route path="/thank-you" element={<Thankyou />} />
        <Route path="/test" element={<TestComponent />} />
      </Routes>
    </BrowserRouter>
  </NotificationProvider>
);

export default App;
