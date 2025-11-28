import React from "react";
import { useParams } from "react-router-dom"; 
import "./Aboutme.css";
import BgVideo from "../Assets/bgvidanimation.mp4";
import BgDetails from "../Assets/bgvid.png";
import BarImg from "../Assets/bar.png";
import WhatDoImg from "../Assets/WHATDOIDO.png";
import Nav from "../Components/Layout/Nav";
import Footer from "../Components/Layout/Footer";
import Faq from "../Components/Layout/Faq";
import AnimatedContent from "../Components/Layout/AnimatedContent";


const Aboutme = () => {
    return (
        <>
        <Nav/>
            <div className="abouytme">
        <video autoPlay muted loop playsInline className="bg-video">
          <source src={BgVideo} type="video/mp4" />
        </video>

        <div className="content">
          
          <h1 className="aboutmetext">About Me</h1>

          <p className="aboutmetext2">
            I’m a UI/UX Designer, Graphic Designer, and Front-End <br />
            Developer passionate about creating user-centered <br />
            digital experiences. I specialize in branding, motion <br />
            graphics, photography, and video editing, blending <br />
            creativity with functionality to bring ideas to life. My <br />
            goal is to design modern, responsive, and visually <br />
            engaging solutions that help brands grow and <br />
            connect with their audience.
          </p>

          <div className="buttonexp">
            <h1 className="exploretext">Explore more</h1>
          </div>
        </div>

        <img className="wbar" src={BarImg} alt="white bar" />
      </div>


      <div
        className="bgdetails_aboutius"
        style={{ backgroundImage: `url(${BgDetails})` }}
      >
        <img src={WhatDoImg} alt="What I Do" />

        <div className="stylewhsatdo">
          <h1 className="whatdoitext">What I Do</h1>

          <h1 className="whatdoitext2">
            I specialize in UX/UI design, visual branding, and <br />
            responsive web development, helping businesses and <br />
            creators build impactful online presences. From interface <br />
            design and motion graphics to video montage and <br />
            product photography, I craft visuals that communicate <br />
            clearly and connect emotionally with users.
          </h1>
        </div>
      </div>
    
        <Faq />

            <AnimatedContent distance={50} delay={1.8}>
        <Footer />
      </AnimatedContent>
    
        </>
      );
}
 
export default Aboutme;