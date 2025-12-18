import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Services from "./Pages/Services";
import Blogs from "./Pages/BlogCard";
import ProjDetails from "./Pages/ProjDetails"; // existing dynamic subpage
import BlogCardone from "./Pages/BlogCardone";
import Aboutme from "./Pages/Aboutme";
import Contactme from "./Pages/Contactme";
import TestApi from "./Pages/TestApi";


const RoutingApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/:id" element={<ProjDetails />} /> 
        <Route path="/BlogCard" element={<Blogs />} />
        <Route path="/BlogCard/:id" element={<BlogCardone/>} /> 
        <Route path="/Aboutme" element={<Aboutme />} />
        <Route path="/Contactme" element={<Contactme />} />
        <Route path="/TestApi" element={<TestApi/>} />


      </Routes>
    </BrowserRouter>
  );
};

export default RoutingApp;