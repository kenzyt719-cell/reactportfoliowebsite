import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Services from "./Pages/Services";
import Blogs from "./Pages/BlogCard";
import ProjDetails from "./Pages/ProjDetails"; // existing dynamic subpage
import BlogCardone from "./Pages/BlogCardone";

const RoutingApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/:id" element={<ProjDetails />} /> {/* dynamic subpage */}
        <Route path="/BlogCard" element={<Blogs />} />
        <Route path="/BlogCard/:id" element={<BlogCardone/>} /> {/* dynamic subpage */}

      </Routes>
    </BrowserRouter>
  );
};

export default RoutingApp;