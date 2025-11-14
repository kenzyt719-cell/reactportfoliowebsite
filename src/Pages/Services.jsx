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
import AnimatedContent from "../Components/Layout/AnimatedContent";
import SplashCursorEffect from "../Components/Layout/SplashCursor";

const Services = () => {
  const navigate = useNavigate();

  const handleFirstFeaturedClick = () => {
    navigate("/services/1");
  };

  return (
    <>
      <SplashCursorEffect />
      <Nav />
      <CardSwap />

      {/* First Featured clickable, opens as ProjDetails subpage */}
      <AnimatedContent distance={50} delay={0}>
        <div onClick={handleFirstFeaturedClick} style={{ cursor: "pointer" }}>
          <h1 className="deatilsfonttyello22">Featured Categories</h1>
          <Featured />
        </div>
      </AnimatedContent>

      {/* Other Featured sections */}
      <AnimatedContent distance={50} delay={0.2}>
        <Featured />
      </AnimatedContent>

      <AnimatedContent distance={50} delay={0.4}>
        <Featured />
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