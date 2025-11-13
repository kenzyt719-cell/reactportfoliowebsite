import React from "react";
import { useNavigate } from "react-router-dom";
import Nav from "../Components/Layout/Nav";
import Header from "../Components/Layout/Header";
import Featured from "../Components/Layout/Featured";
import Skills from "../Components/Layout/Skills";
import WorkExperience from "../Components/Layout/WorkExperience";
import AboutMeSection from "../Components/Layout/AboutMeSection";
import ImageTrail from "../Components/Layout/ImageTrail";
import Faq from "../Components/Layout/Faq";
import Blogs from "../Components/Layout/Blogs";
import ContactHome from "../Components/Layout/ContactHome";
import Footer from "../Components/Layout/Footer";
import CardSwap from "../Components/Layout/CardSwap";

const Services = () => {
  const navigate = useNavigate();

  const handleFirstFeaturedClick = () => {
    navigate("/projectdetails");
  };

  return (
    <>
      <Nav />
      <CardSwap />

      {/* Make first Featured clickable */}
      <div onClick={handleFirstFeaturedClick} style={{ cursor: "pointer" }}>
         <h1 className="deatilsfonttyello22">Featured Categories</h1>
        <Featured />
      </div>

      {/* Rest remain normal */}
      <Featured />
      <Featured />
    
      <Skills />
      <WorkExperience />
      <Blogs />
    
      <ContactHome />
      <Footer />
    </>
  );
};

export default Services;