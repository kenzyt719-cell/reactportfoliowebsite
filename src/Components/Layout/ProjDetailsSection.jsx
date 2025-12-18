import React, { useEffect, useState } from "react";
import "./ProjDetailsSection.css";
import ButtonDetailsWhite from "../Common/ButtonDetailsWhite";
import zooWebsite2 from "../../Assets/zoo website 2.png";
import { supabase } from "../../Supabase";

const ProjDetailsSection = () => {

  const [Project , setProject] = useState([
    { title: "2" }
  ]);

  useEffect(()=>{
    async function callGetAPI(){
      const res = await supabase
        .from("Project_details")
        .select("*")
        .eq("id", 2);   // <-- only get item with id = 2

      setProject(res.data);
    }

    callGetAPI();
  },[])

  const handleClick = () => {
    console.log("White button clicked!");
  };

  return (
    <div className="secounddivdeails">

      {/* Use index 0 ALWAYS */}
      <h1 className="gizazoofonth1sec2">
        {Project[0].title}
      </h1>

      <img src={zooWebsite2} alt="Giza Zoo Website 2" />

      <h3 className="deatilsfont4">
          {Project[0].description} </h3>

      <ButtonDetailsWhite text="View Details" onClick={handleClick} />
    </div>
  );
};

export default ProjDetailsSection;