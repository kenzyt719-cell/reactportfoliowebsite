import React, { useEffect, useState } from "react";
import "./WorkExperience.css";
import middleImg from "../../Assets/middle.png";
import { supabase } from "../../Supabase";

const WorkExperience = () => {
  const [loading, setLoading] = useState(true);
  const [workExperience, setWorkExperience] = useState([]);

  useEffect(() => {
    async function getWorkExperience() {
      const { data, error } = await supabase
        .from("work_experience")
        .select("*");

      if (error) {
        console.error(error);
      } else {
        setWorkExperience(data);
      }

      setLoading(false);
    }

    getWorkExperience();
  }, []);

  if (loading) return <p>Loading...</p>;

  // split rows into left & right columns
  const leftColumn = workExperience.slice(0, Math.ceil(workExperience.length / 2));
  const rightColumn = workExperience.slice(Math.ceil(workExperience.length / 2));

  return (
    <div className="work-experience-container">
      <h1 className="deatilsfonttyello22">My Work Experience</h1>

      <div className="workexperince">
        {/* LEFT COLUMN */}
        <div className="work-column">
          {leftColumn.map((item) => (
            <div className="work-item" key={item.id}>
              <h2 className="uxuitextexperience">{item.title1}</h2>
              <h1 className="designtext1">{item.subtitle1}</h1>
            </div>
          ))}
        </div>

        {/* MIDDLE IMAGE */}
        <div className="work-image">
          <img src={middleImg} alt="Middle Illustration" />
        </div>

        {/* RIGHT COLUMN */}
        <div className="work-column">
          {rightColumn.map((item) => (
            <div className="work-item" key={item.id}>
              <h2 className="uxuitextexperience">{item.title1}</h2>
              <h1 className="designtext1">{item.subtitle1}</h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkExperience;