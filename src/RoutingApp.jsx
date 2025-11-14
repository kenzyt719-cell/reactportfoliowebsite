import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Services from "./Pages/Services";
import Blogs from "./Pages/BlogCard";
import ProjDetails from "./Pages/ProjDetails"; // existing dynamic subpage

const RoutingApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/:id" element={<ProjDetails />} /> {/* dynamic subpage */}
        <Route path="/BlogCard" element={<Blogs />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RoutingApp;