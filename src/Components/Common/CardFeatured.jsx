import React from "react";
import "./CardFeatured.css";

const CardFeatured = ({ image, arrow, category, type, date, title }) => {
  return (
    <div className="cardmnaindivindex">
      <div className="imgcard">
        <img src={image} alt={title} />
        <div className="arrowindex">
          <img src={arrow} alt="arrow icon" />
        </div>
      </div>

      <div className="cuttoncardsdark">
        <h1 className="uxuidesigntext">{category}</h1>
      </div>

      <div className="diplaytex">
        <div className="doitt"></div>
        <h1 className="deatilsindext">{type}</h1>
        <div className="doitt"></div>
        <h1 className="deatilsindext">{date}</h1>
      </div>

      <div>
        <h1 className="deatilsindext2">{title}</h1>
      </div>
    </div>
  );
};

export default CardFeatured;