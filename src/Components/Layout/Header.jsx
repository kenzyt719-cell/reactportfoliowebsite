import React, { useEffect, useState } from "react";
import "./Header.css";
import mainVideo from "../../Assets/mainindex.mp4";
import mainLogo from "../../Assets/mainlogo.png";
import { supabase } from "../../Supabase";
import Hyperspeed from "../Layout/Hyperspeed";

const Header = () => {
  const [description, setDescription] = useState("");

  useEffect(() => {
    async function getHeroDescription() {
      const { data, error } = await supabase
        .from("Hero_section")
        .select("description")
        .order("id", { ascending: true }) // ✅ Ensure consistent order
        .range(0, 0); // ✅ FIRST row

      if (error) {
        console.error("Supabase fetch error:", error);
        return;
      }

      if (data && data.length > 0) {
        setDescription(data[0].description);
      }
    }

    getHeroDescription();
  }, []);

  return (
    <header className="aboutMe">
      <video autoPlay muted loop playsInline className="bgVideo">
        <source src={mainVideo} type="video/mp4" />
      </video>

      <div className="contentKenzy">
        {/* Static Logo */}
        <img className="mainLogo" src={mainLogo} alt="Kenzy Logo" />

        {/* Description from FIRST row of Supabase */}
        <h1 className="mainTitle">{description}</h1>

        <div className="buttonWrapper">
          <div
            className="buttonSkills"
            onClick={() =>
              window.scrollBy({ top: 800, left: 0, behavior: "smooth" })
            }
            style={{ cursor: "pointer" }}
          >
            <h1 className="figmaText">View All</h1>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;