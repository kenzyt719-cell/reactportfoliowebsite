import React from "react";
import "./ButtonDetailsWhite.css";

const ButtonDetailsWhite = ({ text, onClick }) => {
  return (
    <div className="button2white" onClick={onClick} style={{ cursor: "pointer" }}>
      <h4 className="detailstextwhite">{text}</h4>
    </div>
  );
};

export default ButtonDetailsWhite;