import React from "react";
import { useNavigate } from "react-router-dom";
import Nav from "../Components/Layout/Nav";
import Featured from "../Components/Layout/Featured";
import Skills from "../Components/Layout/Skills";
import WorkExperience from "../Components/Layout/WorkExperience";
import Blogs from "../Components/Layout/Blogs";
import ContactHome from "../Components/Layout/ContactHome";
import Footer from "../Components/Layout/Footer";
import CardSwap from "../Components/Layout/CardSwap";

const Services = () => {
  const navigate = useNavigate();

  // Navigate to ProjDetails with ID=1 (you can change ID as needed)
  const handleFirstFeaturedClick = () => {
    navigate("/services/1");
  };

  return (
    <>
      <Nav />
      <CardSwap />

      {/* First Featured clickable, opens as ProjDetails subpage */}
      <div onClick={handleFirstFeaturedClick} style={{ cursor: "pointer" }}>
        <h1 className="deatilsfonttyello22">Featured Categories</h1>
        <Featured />
      </div>

      {/* Other sections remain normal */}
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