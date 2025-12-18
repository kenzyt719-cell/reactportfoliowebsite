import React, { Component, useEffect, useState } from 'react';
import { supabase } from '../../Supabase';
import "./ProjDetailsHeader.css";

import ButtonDetails from "../Common/ButtonDetails";
import bgVid from "../../Assets/bgvid.png"; 
import zooWebsite from "../../Assets/zoo wensite 1.png"; 

const ProjDetailsHeader = () => {

  const [Project , setProject] = useState([
    { title: "1" }
  ]);

  useEffect(()=>{
    async function callGetAPI(){
      const res = await supabase
        .from("Project_details")
        .select("*")
    ;

      setProject(res.data);
    }

    callGetAPI();
  },[])

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


        <h1 className="gizazoofonth1">
          {Project[0].title}
        </h1>

        <h2 className="gizazoofonth2">
         
         
        </h2>
        <h3 className="gizazoofonth3">
         {Project[0].description}
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