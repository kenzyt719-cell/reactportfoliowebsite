import React, { useEffect, useState } from "react";
import "./ProjDetailsSection.css";
import ButtonDetailsWhite from "../Common/ButtonDetailsWhite";
import zooWebsite2 from "../../Assets/zoo website 2.png";
import { supabase } from "../../Supabase";

const ProjDetailsSection = () => {
  const [Project, setProject] = useState([]);

  useEffect(() => {
    async function callGetAPI() {
      const { data, error } = await supabase
        .from("edit_screen")
        .select("*");     

      if (!error) {
        setProject(data || []);
      } else {
        console.error(error);
      }
    }

    callGetAPI();
  }, []);

  const handleClick = () => {
    console.log("White button clicked!");
  };

  return (
    <div className="secounddivdeails">
      <h1 className="gizazoofonth1sec2">
        {Project[0]?.Title2}
      </h1>

      <img src={zooWebsite2} alt="Giza Zoo Website 2" />

      <h3 className="deatilsfont4">
        {Project[0]?.description2}
      </h3>

      <ButtonDetailsWhite text="View Details" onClick={handleClick} />
    </div>
  );
};

export default ProjDetailsSection;