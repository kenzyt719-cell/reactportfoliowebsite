import React from "react";
import "./Contactme.css";

import Nav from "../Components/Layout/Nav";
import Footer from "../Components/Layout/Footer";

import FlowingMenu from "../Components/Layout/FlowingMenu";

import bgImg from "../Assets/bgvid.png";
import img1 from "../Assets/bgvid.png";
import img2 from "../Assets/bar.png";
import img3 from "../Assets/WHATDOIDO.png";

const Contactme = () => {
  return (
    <>
      <Nav />

      {/* CONTACT SECTION */}
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

      <Footer />
    </>
  );
};

export default Contactme;