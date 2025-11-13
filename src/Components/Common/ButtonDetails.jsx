import React from "react";
import "./ButtonDetails.css";

const ButtonDetails = ({ text }) => {
  return (
    <div className="divmianbutton">
      <h3 className="buttonmaintext">{text}</h3>
    </div>
  );
};

export default ButtonDetails;