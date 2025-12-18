import React from "react";
import { useParams } from "react-router-dom"; 
import "./ProjDetails.css";
import ProjDetailsHeader from "../Components/Layout/ProjDetailsHeader";
import Nav from "../Components/Layout/Nav";
import ProjDetailsSection from "../Components/Layout/ProjDetailsSection";
import ProjDetailsThirdSection from "../Components/Layout/ProjDetailsThirdSection";
import Masonry from "../Components/Layout/Masonry";
import ContactHome from "../Components/Layout/ContactHome";
import Footer from "../Components/Layout/Footer";
import SplashCursorEffect from "../Components/Layout/SplashCursor";

const ProjDetails = () => {
  const { id } = useParams(); 

  return (
    <div className="projdetails-page">\
          <SplashCursorEffect />
      <Nav />

     
      <ProjDetailsHeader projectId={id} />
      <ProjDetailsSection projectId={id} />
      <ProjDetailsThirdSection projectId={id} />
      <Masonry projectId={id} />

      <ContactHome />
      <Footer />
    </div>
  );
};

export default ProjDetails;