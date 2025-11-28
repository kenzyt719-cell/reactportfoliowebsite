import React from "react";
import "./TableOfContent.css";

const TableOfContent = () => {
  return (
    <div className="tableofcontent">
      <h2>Table of Contents</h2>
      <ul>
        <li><a href="#intro">1. Introduction</a></li>
        <li><a href="#best-designer">2. Best Female Graphic Designer</a></li>
        <li><a href="#salary">3. Average Salary for Graphic Designers in Egypt</a></li>
        <li><a href="#salary-factors">4. What Affects a Designer’s Salary</a></li>
        <li><a href="#challenges">5. Challenges Female Designers Face</a></li>
        <li><a href="#conclusion">6. In Conclusion</a></li>
      </ul>
    </div>
  );
};

export default TableOfContent;