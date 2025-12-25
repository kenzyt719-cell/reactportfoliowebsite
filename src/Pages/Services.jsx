import React from "react";
import { useNavigate } from "react-router-dom";
import Nav from "../Components/Layout/Nav";
import Featuredtwo from "../Components/Layout/Featuredtwo";
import Skills from "../Components/Layout/Skills";
import WorkExperience from "../Components/Layout/WorkExperience";
import Blogs from "../Components/Layout/Blogs";
import ContactHome from "../Components/Layout/ContactHome";
import Footer from "../Components/Layout/Footer";
import CardSwap from "../Components/Layout/CardSwap";
import AnimatedContent from "../Components/Layout/AnimatedContent";
import SplashCursorEffect from "../Components/Layout/SplashCursor";

const Services = () => {
  const navigate = useNavigate();

  const handleFirstFeaturedClick = () => {
    navigate("/projects"); 
  };

  return (
    <>
      <SplashCursorEffect />
      <Nav />
      <CardSwap />

     
      <AnimatedContent distance={50} delay={0}>
        <div onClick={handleFirstFeaturedClick} style={{ cursor: "pointer" }}>
          <h1 className="deatilsfonttyello22">Categories</h1>
          <Featuredtwo />
        </div>
      </AnimatedContent>

      {/* Skills Section */}
      <AnimatedContent distance={50} delay={0.6}>
        <Skills />
      </AnimatedContent>

      {/* Work Experience Section */}
      <AnimatedContent distance={50} delay={0.8}>
        <WorkExperience />
      </AnimatedContent>

      {/* Blogs Section */}
      <AnimatedContent distance={50} delay={1}>
        <Blogs />
      </AnimatedContent>

      {/* Contact Section */}
      <AnimatedContent distance={50} delay={1.2}>
        <ContactHome />
      </AnimatedContent>

      {/* Footer */}
      <AnimatedContent distance={50} delay={1.4}>
        <Footer />
      </AnimatedContent>
    </>
  );
};

export default Services;