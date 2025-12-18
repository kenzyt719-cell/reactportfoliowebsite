import React, { useEffect, useState } from "react";
import "./Faq.css";
import { supabase } from "../../Supabase";

export default function Faq() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [faqData, setFaqData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getFaq() {
      const res = await supabase.from("new_faq").select("*");
      setFaqData(res.data);
      setLoading(false);
    }
    getFaq();
  }, []);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  if (loading) return <p>Loading...</p>;

  return (
    <section className="faq">
      <div className="faq-text">
        <h2 className="deatilsfonttyelloagaiam">
          Frequently Asked Questions
        </h2>
        <p className="pfaq">
          Here are some common questions about my UX/UI design work and process.
          I’ve shared insights into how I approach each project, collaborate with
          clients, and bring ideas to life through thoughtful design.
        </p>
      </div>

      <div className="faq-container">
        {faqData.map((item, index) => (
          <div
            key={item.id}
            className={`faq-item ${activeIndex === index ? "active" : ""}`}
          >
            <button
              className="faq-question"
              onClick={() => toggleFAQ(index)}
            >
              {item.question}
              <span className="icon">
                {activeIndex === index ? "▲" : "▼"}
              </span>
            </button>

            <div className="faq-answer">
              <p className="pfaqc2">{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}