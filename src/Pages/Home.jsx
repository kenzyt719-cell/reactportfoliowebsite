import React from "react";
import Nav from "../Components/Layout/Nav";
import Header from "../Components/Layout/Header";
import Featured from "../Components/Layout/Featured";
// import VideoShowreel from "../Components/Layout/VideoShowreel";
import Skills from "../Components/Layout/Skills";
import WorkExperience from "../Components/Layout/WorkExperience";
import AboutMeSection from "../Components/Layout/AboutMeSection";
import ImageTrail from "../Components/Layout/ImageTrail";
import Faq from "../Components/Layout/Faq";
import Blogs from "../Components/Layout/Blogs";
import ContactHome from "../Components/Layout/ContactHome";
import Footer from "../Components/Layout/Footer";
import ButtonDetailsWhite from "../Components/Common/ButtonDetailsWhite";
import DomeGallery from "../Components/Layout/DomeGallery";
import AnimatedContent from "../Components/Layout/AnimatedContent";
import SplashCursorEffect from "../Components/Layout/SplashCursor";
import FlowingMenu from "../Components/Layout/FlowingMenu";

import Hyperspeed from "../Components/Layout/Hyperspeed";

// Import your PNG images
import img1 from "../Assets/img1.png";
import img2 from "../Assets/img2.png";
import img3 from "../Assets/img3.png";
import img4 from "../Assets/img4.png";
import img5 from "../Assets/img5.png";
import img6 from "../Assets/img6.png";
import img7 from "../Assets/img7.png";
import img8 from "../Assets/img8.png";
import { Link } from "react-router-dom";
   
const imageItems = [img1, img2, img3, img4, img5, img6, img7, img8];

const Home = () => {
  return (
    <>
      <SplashCursorEffect />
      <Nav />
          
      <Header />
      
      

      <AnimatedContent distance={50} delay={0}>
        <h1 className="deatilsfonttyello22">Featured Categories</h1>
        <Featured />


  <Link to="/services" >
        <ButtonDetailsWhite text="View All" />
        </Link>
      </AnimatedContent>

      <AnimatedContent distance={50} delay={0.2}>
        <Skills />
      </AnimatedContent>

      <AnimatedContent distance={50} delay={0.4}>
        <WorkExperience />
      </AnimatedContent>

      <AnimatedContent distance={50} delay={0.6}>
       
        {/* First ImageTrail Section */}
        <div style={{ width: "100%", height: "50px", position: "relative" }}>
          <ImageTrail items={imageItems} variant={1} />
        </div>
      </AnimatedContent>

      <AnimatedContent distance={50} delay={0.8}>
        <AboutMeSection />
      </AnimatedContent>

      <AnimatedContent distance={50} delay={1}>
        {/* Second ImageTrail Section */}
        <div style={{ width: "100%", height: "50px", position: "relative" }}>
          <ImageTrail items={imageItems} variant={1} />
        </div>
      </AnimatedContent>

      <AnimatedContent distance={50} delay={1.2}>
        <Faq />
      </AnimatedContent>

      <AnimatedContent distance={50} delay={1.4}>
        <Blogs />
      </AnimatedContent>

      <AnimatedContent distance={50} delay={1.6}>
        <ContactHome />
      </AnimatedContent>

  {/* FLOWING MENU */}
      <div style={{ height: "100vh", backgroundColor: "#020103" }}>
        <FlowingMenu
          items={[
            { text: "UI / UX", link: "#", image: img1 },
            { text: "Branding", link: "#", image: img2 },
            { text: "Web Development", link: "#", image: img3 },
          ]}
        />
      </div>
      <AnimatedContent distance={50} delay={1.8}>
        <Footer />
      </AnimatedContent>

      <AnimatedContent distance={50} delay={2}>
        <DomeGallery />
      </AnimatedContent>
    </>
  );
};

export default Home;
