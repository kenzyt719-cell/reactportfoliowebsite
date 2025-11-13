
import React from "react";
import "./ProjDetails.css";
import ProjDetailsHeader from "../Components/Layout/ProjDetailsHeader";
import Nav from "../Components/Layout/Nav";
import ProjDetailsSection from "../Components/Layout/ProjDetailsSection";
import ProjDetailsThirdSection from "../Components/Layout/ProjDetailsThirdSection";
import Masonry from "../Components/Layout/Masonry";
import ContactHome from "../Components/Layout/ContactHome";
import Footer from "../Components/Layout/Footer";

const ProjDetails = () => {
  return (
    
    <div className="projdetails-page">
      <Nav />

      <ProjDetailsHeader />
      <ProjDetailsSection />
      <ProjDetailsThirdSection />
      <Masonry />
      {/* You can later add more sections here, like overview, process, gallery, etc. */}
    
    
     <ContactHome />
      <Footer />
    </div>
    
  );
};

export default ProjDetails;