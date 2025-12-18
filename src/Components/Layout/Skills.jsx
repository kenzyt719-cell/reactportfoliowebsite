import React, { useEffect, useState } from "react";
import SkillBox from "../Common/SkillBox";
import "./Skills.css";
import bgVid from "../../Assets/bgvid.png"; // background image
import { supabase } from "../../Supabase";

const Skills = () => {
  const [skillsData, setSkillsData] = useState(null);

  useEffect(() => {
    async function getSkills() {
      const { data, error } = await supabase
        .from("skills")
        .select("*")
        .order("id", { ascending: true }) 
        .range(0, 0); 
      if (error) {
        console.error("Supabase fetch error:", error);
        return;
      }

      if (data && data.length > 0) {
        setSkillsData(data[0]);
      }
    }

    getSkills();
  }, []);

  if (!skillsData) {
    return null; 
  }

  const firstRowSkills = [
    skillsData.skill1,
    skillsData.skill2,
    skillsData.skill3,
  ];

  const secondRowSkills = [
    skillsData.skill4,
    skillsData.skill5,
    skillsData.skill6,
  ];

  return (
    <div className="bgdetails2" style={{ backgroundImage: `url(${bgVid})` }}>
    
      <h1 className="deatilsfonttyello colorwhite">Skills</h1>

      <div className="divsboxses">
        <h4 className="textskills">{skillsData.title}</h4>

        <div className="divsboxses">
          <div>
            {firstRowSkills.map(
              (skill, index) => skill && <SkillBox key={index} skillName={skill} />
            )}
          </div>
          <div>
            {secondRowSkills.map(
              (skill, index) => skill && <SkillBox key={index} skillName={skill} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;