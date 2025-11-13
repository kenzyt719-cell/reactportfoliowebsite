import React from "react";
import CardFeatured from "../Common/CardFeatured";
import "./Featured.css";

import cardImg from "../../Assets/card1.png";
import arrowIcon from "../../Assets/arrow.png"; 
const cardsData = [
  {
    image: cardImg,
    arrow: arrowIcon,
    category: "UXUI Design",
    type: "Website Design",
    date: "20 May 2025",
    title: "Design Unraveled: Behind the Scenes of UI/UX Magic",
  },
  {
    image: cardImg,
    arrow: arrowIcon,
    category: "Graphic Design",
    type: "Branding",
    date: "15 Apr 2025",
    title: "Creating Stunning Brand Identities",
  },
  {
    image: cardImg,
    arrow: arrowIcon,
    category: "UX Research",
    type: "App Design",
    date: "10 Mar 2025",
    title: "Research-Driven App Experiences",
  },
];

const Featured = () => {
  return (
    <div>
      <h1 className="deatilsfonttyello22">Featured Categories</h1>

      <div className="cardindexx">
        {cardsData.map((card, index) => (
          <CardFeatured
            key={index}
            image={card.image}
            arrow={card.arrow}
            category={card.category}
            type={card.type}
            date={card.date}
            title={card.title}
          />
        ))}
      </div>

      <div className="middleidnex">
  
      </div>
    </div>
  );
};

export default Featured;