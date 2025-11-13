// src/Components/Featured/FeaturedTitle.jsx
import React from "react";
import "./FeaturedTitle.css";


const FeaturedTitle = ({ titleName }) => {
  return <h1 className="featured-title">{titleName}</h1>;
};

export default FeaturedTitle;