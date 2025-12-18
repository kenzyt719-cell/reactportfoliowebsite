import React, { useEffect, useState } from "react";
import "./ProjDetailsThirdSection.css";
import ButtonDetails from "../Common/ButtonDetails";
import zooWebsite3 from "../../Assets/zoo website 3.png"; 
import barImage from "../../Assets/bar.png"; 
import bgVid from "../../Assets/bgvid.png"; 
import { supabase } from "../../Supabase";

const ProjDetailsThirdSection = () => {

  const [Project, setProject] = useState([
    { title: "loading", description: "loading" }
  ]);

  useEffect(() => {
    async function callGetAPI() {
      const res = await supabase
        .from("Project_details")
        .select("*")
        .eq("id", 3 );

      setProject(res.data);
    }

    callGetAPI();
  }, []);

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

       
          <h1 className="gizazoofonth1">
            {Project[0].title}
          </h1>

          <h2 className="gizazoofonth55">
            {Project[0].description}
          </h2>

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