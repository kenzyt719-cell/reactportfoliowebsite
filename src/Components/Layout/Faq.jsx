import React, { useState } from "react";
import "./Faq.css";

const faqData = [
  {
    question: "What services do you offer?",
    answer: `I specialize in UX/UI design — creating user-centered digital experiences that are both
    functional and visually engaging. My work focuses on understanding user needs, designing
    intuitive interfaces, and ensuring every interaction feels seamless and meaningful.`,
  },
  {
    question: "What’s your design process like?",
    answer: `My UX/UI design process involves research, user journey mapping, wireframing, and prototyping.
    I focus on usability, interaction design, and creating interfaces that align with brand goals
    and user needs.`,
  },
  {
    question: "What tools do you use?",
    answer: `I use tools like Figma, Adobe XD, and Photoshop for UX/UI design and prototyping.
    For visual design and motion, I also use Illustrator and After Effects.`,
  },
  {
    question: "Do you also develop websites?",
    answer: `Yes! Alongside UX/UI design, I also handle front-end development using HTML, CSS, and JavaScript,
    ensuring the design translates smoothly into a responsive, functional website.`,
  },
];

export default function Faq() {
  const [activeIndex, setActiveIndex] = useState(null); // all closed initially

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq">
      <div className="faq-text">
        <h2 className="deatilsfonttyelloagaiam">Frequently Asked Questions</h2>
        <p className="pfaq">
          Here are some common questions about my UX/UI design work and process.
          I’ve shared insights into how I approach each project, collaborate with clients,
          and bring ideas to life through thoughtful design.
        </p>
      </div>

      <div className="faq-container">
        {faqData.map((item, index) => (
          <div
            key={index}
            className={`faq-item ${activeIndex === index ? "active" : ""}`}
          >
            <button
              className="faq-question"
              onClick={() => toggleFAQ(index)}
            >
              {item.question}
              <span className="icon">{activeIndex === index ? "▲" : "▼"}</span>
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