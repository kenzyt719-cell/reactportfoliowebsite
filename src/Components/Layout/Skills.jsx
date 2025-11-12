import React from "react";
import SkillBox from "../Common/SkillBox";
import "./Skills.css";
import bgVid from "../../Assets/bgvid.png"; // import background image

const Skills = () => {
  return (
    <div
      className="bgdetails2"
      style={{ backgroundImage: `url(${bgVid})` }}
    >
      <h1 className="deatilsfonttyello colorwhite">Skills</h1>

      <div className="divsboxses">
        <h4 className="textskills">
          As a passionate UX/UI Designer, I combine <br />
          creativity and problem-solving to craft intuitive <br />
          user experiences and visually appealing <br />
          interfaces, supported by strong design and <br />
          technical skills.
        </h4>

        <div className="divsboxses">
          <div>
            <SkillBox skillName="Figma" />
            <SkillBox skillName="VS Code" />
            <SkillBox skillName="Photoshop" />
          </div>
          <div>
            <SkillBox skillName="Illustrator" />
            <SkillBox skillName="Premiere" />
            <SkillBox skillName="Lightroom" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;