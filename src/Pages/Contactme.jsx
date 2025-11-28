import React from "react";
import { useParams } from "react-router-dom"; 
import "./Contactme.css";
import BgVideo from "../Assets/bgvidanimation.mp4";
import BgDetails from "../Assets/bgvid.png";
import BarImg from "../Assets/bar.png";
import WhatDoImg from "../Assets/WHATDOIDO.png";
import Nav from "../Components/Layout/Nav";
import Footer from "../Components/Layout/Footer";
import Faq from "../Components/Layout/Faq";
import AnimatedContent from "../Components/Layout/AnimatedContent";

import bgImg from "../Assets/bgvid.png"

const Contactme = () => {
    return (
        <>
        <Nav/>
  <div className="contactbg" style={{ backgroundImage: `url(${bgImg})` }}>
      <h1 className="contactustext">Contact us</h1>

      <div className="stylecontactf">

        {/* LEFT SIDE */}
        <div className="stylequestoins1">
          <h1 className="questionstext">HAVE ANY QUESTIONS ?</h1>

          <h1 className="questionstext2">
            If you have questions or anything <br />
            you need to know we would be <br />
            happy to help you as soon as possible.
          </h1>

          <h1 className="questionstext">E-MAIL</h1>
          <h1 className="questionstext2">Kenzyt719@gmail.com</h1>

          <h1 className="questionstext">NUMBER</h1>
          <h1 className="questionstext2">01095006444</h1>
        </div>

        {/* RIGHT SIDE */}
        <div className="stylenamedivs">
          <h1 className="questionstext">NAME</h1>
          <div className="styledivs">
            <div className="buttoncontact">
              <h1 className="lastnametext">Last Name</h1>
            </div>
            <div className="buttoncontact">
              <h1 className="lastnametext">Last Name</h1>
            </div>
          </div>

          <h1 className="questionstext">NAME</h1>
          <div className="styledivs">
            <div className="buttoncontact2">
              <h1 className="lastnametext">Last Name</h1>
            </div>
          </div>

          <h1 className="questionstext">NAME</h1>
          <div className="styledivs">
            <div className="buttoncontact2">
              <h1 className="lastnametext">Last Name</h1>
            </div>
          </div>
        </div>

      </div>
    </div>
    </>
      );
}
 
export default Contactme;