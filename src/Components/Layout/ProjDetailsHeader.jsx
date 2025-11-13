import React from "react";
import "./ProjDetailsHeader.css";
import ButtonDetails from "../Common/ButtonDetails";
import bgVid from "../../Assets/bgvid.png"; // background image
import zooWebsite from "../../Assets/zoo wensite 1.png"; // main image

const ProjDetailsHeader = () => {
  return (
    <div
      className="bgdetails"
      style={{
        backgroundImage: `url(${bgVid})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="divtextzoo">
        <h1 className="gizazoofonth1">Giza Zoo Website</h1>
        <h2 className="gizazoofonth2">
          A Modern Digital Experience for <br /> Egypt’s Oldest Zoo
        </h2>
        <h3 className="gizazoofonth3">
          UX/UI Design Full Development Responsive (Mobile & Tablet)
        </h3>

        <ButtonDetails text="View Details" />
      </div>

      <div>
        <img src={zooWebsite} alt="Giza Zoo Website" />
      </div>
    </div>
  );
};

export default ProjDetailsHeader;