import React from "react";
import "./Nav.css";
import logo from "../../Assets/main logo header.png";
import { Link } from "react-router-dom";


const Nav = () => {
  return (
    <div className="styleheader">
      <header className="navbar">
        <div className="nav-content">
          <Link to="/Contactme" className="nav-link">Contact Me</Link>
          <Link to="/Aboutme" className="nav-link">About Me</Link>


        

          <Link to="/">
            <img src={logo} alt="Main Logo" className="nav-logo" />
          </Link>

<Link to="/Services" className="nav-link">My Services</Link>  
        <Link to="/BlogCard" className="nav-link">The Blogs</Link>

        </div>
      </header>
    </div>
    
  );
};

export default Nav;