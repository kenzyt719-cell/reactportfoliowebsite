import React from "react";
import "./CardBlogs.css";

const CardBlogs = ({ img, title, description, arrow }) => {
  return (
    <div className="divblogs_index">
      <img src={img} alt={title} />
      <div className="blogsttext">
        <h1
          className="miantextblog_index"
          dangerouslySetInnerHTML={{ __html: title }}
        ></h1>
        <h1 className="miantextblog_indexsmall">{description}</h1>
        <div className="fulltext">
          <h1 className="miantextblog_indexsmall">See full review</h1>
          <img src={arrow} alt="arrow" />
        </div>
      </div>
    </div>
  );
};

export default CardBlogs;