import React from "react";
import CardBlogs from "../Common/CardBlogs";
import ButtonDetailsWhite from "../Common/ButtonDetailsWhite";
import { Link } from "react-router-dom";

import "./Blogs.css";

// Import images from Assets
import blog1 from "../../Assets/blog1index.png";
import blog2 from "../../Assets/blog2index.png";
import arrow from "../../Assets/arrow2.png";

const blogsData = [
  {
    img: blog1,
    title: "Introducing AI <br /> Fundamentals for UX",
    description:
      "Understanding how AI works and how to use it in UX is no longer optional. In this article we introduce the Certificate in AI Fundamentals design...",
  },
  {
    img: blog2,
    title: "AI in Design <br /> Trends 2025",
    description:
      "Discover the latest AI trends in UX design and learn how to integrate AI tools to enhance user experience and productivity...",
  },
];

const Blogs = () => {
  return (
    <div>
      <h1 className="deatilsfonttyello2233">Blogs</h1>
      <div className="styleblogs">
        <div className="style2blogs">
          {blogsData.map((blog, index) => (
            <CardBlogs
              key={index}
              img={blog.img}
              title={blog.title}
              description={blog.description}
              arrow={arrow}
            />
          ))}
        </div>
      </div>
      <div className="middleidnex">
  <Link to="/BlogCard" >
                 <ButtonDetailsWhite text="View All" />
      </Link>
      </div>
    </div>
  );
};

export default Blogs;