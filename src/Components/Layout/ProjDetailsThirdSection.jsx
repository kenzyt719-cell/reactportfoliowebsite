import React from "react";
import "./ProjDetailsThirdSection.css";
import ButtonDetails from "../Common/ButtonDetails";
import zooWebsite3 from "../../Assets/zoo website 3.png"; 
import barImage from "../../Assets/bar.png"; 
import bgVid from "../../Assets/bgvid.png"; 

const ProjDetailsThirdSection = () => {
  // Button text as a prop inside the section itself
  const buttonText = "View In AR";

  return (
    <div>
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
          <h1 className="gizazoofonth1">Design Process</h1>
          <h2 className="gizazoofonth55">
            A complete UX/UI and front-end project showcasing a <br />
            modern redesign for the Giza Zoo website. <br />
            The project focuses on enhancing user experience, simplifying <br />
            the ticket booking process, and creating a visual identity that <br />
            reflects the zoo’s natural and cultural heritage.
          </h2>

          {/* Use the prop internally */}
          <ButtonDetails text={buttonText} />
        </div>

        <div>
          <img src={zooWebsite3} alt="Giza Zoo Website 3" />
        </div>
      </div>

      <div>
        <img className="wbar" src={barImage} alt="bar" />
      </div>
    </div>
  );
};

export default ProjDetailsThirdSection;