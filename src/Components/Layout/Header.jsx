import React from "react";
import "./Header.css";
import mainVideo from "../../Assets/mainindex.mp4";
import mainLogo from "../../Assets/mainlogo.png";
import Hyperspeed from "../Layout/Hyperspeed";

const Header = () => {
  return (
    <header className="aboutMe">
   
      <video autoPlay muted loop playsInline className="bgVideo">
        <source src={mainVideo} type="video/mp4" />
      </video>

      <div className="contentKenzy">
        <img className="mainLogo" src={mainLogo} alt="Kenzy Logo" />

        <h1 className="mainTitle">
          Hello I’m Kenzy Tarek, a passionate UX/UI <br />
          designer based in Egypt. My passion is <br />
          about creating meaningful digital <br />
          experiences through UX/UI design.
        </h1>

        <div className="buttonWrapper">
          <div className="buttonSkills">
            <h1 className="figmaText">View All</h1>
          </div>
        </div>
      </div>
  
    </header>
  );
};

export default Header;