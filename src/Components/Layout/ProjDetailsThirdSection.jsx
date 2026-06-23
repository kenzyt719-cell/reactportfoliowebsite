import React, { useEffect, useState } from "react";
import "./ProjDetailsThirdSection.css";
import ButtonDetails from "../Common/ButtonDetails";
import zooWebsite3 from "../../Assets/zoo website 3.png";
import barImage from "../../Assets/bar.png";
import bgVid from "../../Assets/bgvid.png";
import { supabase } from "../../Supabase";

const ProjDetailsThirdSection = () => {
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
            {Project[0]?.title3}
          </h1>

          <h2 className="gizazoofonth55">
            {Project[0]?.description3}
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