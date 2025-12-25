import React, { useEffect, useState } from "react";
import { supabase } from "../../Supabase";
import "./ProjDetailsHeader.css";

import ButtonDetails from "../Common/ButtonDetails";
import bgVid from "../../Assets/bgvid.png";
import zooWebsite from "../../Assets/zoo wensite 1.png";

const ProjDetailsHeader = () => {
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
          {Project[0]?.Title1}
        </h1>

        <h3 className="gizazoofonth3">
          {Project[0]?.description1}
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