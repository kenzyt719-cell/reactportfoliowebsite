import React from "react";
import "./ProjDetailsSection.css";
import ButtonDetailsWhite from "../Common/ButtonDetailsWhite";
import zooWebsite2 from "../../Assets/zoo website 2.png";

const ProjDetailsSection = () => {
  const handleClick = () => {
    console.log("White button clicked!");
    // You can replace this with navigation using useNavigate
  };

  return (
    <div className="secounddivdeails">
      <h1 className="gizazoofonth1sec2">Giza Zoo Website</h1>

      <img src={zooWebsite2} alt="Giza Zoo Website 2" />

      <h3 className="deatilsfont4">
        One of the main challenges in this project was balancing heritage and <br />
        modernization — keeping the natural and historical identity of the Giza Zoo <br />
        while giving it a clean, digital-friendly <br /> look. I focused on making the experience educational yet engaging, integrating <br />
        animal facts, events, and booking options in one cohesive flow.
      </h3>

      <ButtonDetailsWhite text="View Details" onClick={handleClick} />
    </div>
  );
};

export default ProjDetailsSection;