import React, { useEffect, useState } from "react";
import "./AboutMeSection.css";
import { supabase } from "../../Supabase";

const AboutMeSection = () => {
  const [hero, setHero] = useState({
    title: "",
    description: "",
  });

  useEffect(() => {
    async function getHero() {
      const { data } = await supabase
        .from("Hero_section")
        .select("title, description")
        .range(1, 1); 

      if (data && data.length > 0) {
        setHero(data[0]);
      }
    }

    getHero();
  }, []);

  return (
    <section className="aboutmeindex">
      <div className="aboutme-content">
        <h1 className="deatilsfonttyelloagaiam">
          {hero.title}
        </h1>

        <p className="longtext">
          {hero.description}
        </p>
      </div>
    </section>
  );
};

export default AboutMeSection;