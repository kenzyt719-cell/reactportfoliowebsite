import React from "react";
import "./SkillBox.css";

const SkillBox = ({ skillName }) => {
  return (
    <div className="buttonskills">
      <h1 className="figmah1">{skillName}</h1>
    </div>
  );
};

export default SkillBox;