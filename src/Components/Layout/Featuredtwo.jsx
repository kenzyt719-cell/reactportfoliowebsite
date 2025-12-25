import React, { useEffect, useState } from "react";
import CardFeatured from "../Common/CardFeatured";
import "./Featuredtwo.css";
import cardImg from "../../Assets/card1.png"; // keep static image
import arrowIcon from "../../Assets/arrow.png"; 
import { supabase } from "../../Supabase";

const Featuredtwo= () => {
  const [cardsData, setCardsData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getCategories() {
      const { data, error } = await supabase
        .from("Categories")
        .select("*")
        .order("id", { ascending: false });

      if (!error) {
        setCardsData(data || []);
      } else {
        console.error("Error fetching categories:", error);
      }
      setLoading(false);
    }

    getCategories();
  }, []);

  if (loading) return <p>Loading featured projects...</p>;
  if (cardsData.length === 0) return <p>No featured projects available.</p>;

  return (
    <div>
      <div className="cardindexx">
        {cardsData.map((card) => (
          <CardFeatured
            key={card.id}
            image={cardImg}             // static image
            arrow={arrowIcon}
            category={card.title}       // from table
            type={card.type}
            date={card.date}
            title={card.project_info}   // from table
          />
        ))}
      </div>

      <div className="middleidnex">
        {/* optional middle content */}
      </div>
    </div>
  );
};

export default Featuredtwo;