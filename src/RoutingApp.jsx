import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Services from "./Pages/Services";
import ProjDetails from "./Pages/ProjDetails"; // ✅ import your new page

const RoutingApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/projectdetails" element={<ProjDetails />} /> {/* ✅ new route */}
      </Routes>
    </BrowserRouter>
  );
};

export default RoutingApp;