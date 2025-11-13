
import React from "react";
import "./ProjDetails.css";
import ProjDetailsHeader from "../Components/Layout/ProjDetailsHeader";
import Nav from "../Components/Layout/Nav";
import ProjDetailsSection from "../Components/Layout/ProjDetailsSection";
import ProjDetailsThirdSection from "../Components/Layout/ProjDetailsThirdSection";

const ProjDetails = () => {
  return (
    
    <div className="projdetails-page">
      <Nav />

      <ProjDetailsHeader />
      <ProjDetailsSection />
      <ProjDetailsThirdSection />
      
      {/* You can later add more sections here, like overview, process, gallery, etc. */}
    </div>
  );
};

export default ProjDetails;