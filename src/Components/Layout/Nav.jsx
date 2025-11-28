import React, { useState } from "react";
import "./Nav.css";
import logo from "../../Assets/main logo header.png";
import { Link } from "react-router-dom";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="styleheader">
      <header className="navbar">

        {/* Burger button appears ONLY on mobile */}
        <div className="burger" onClick={() => setIsOpen(!isOpen)}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>

        {/* Desktop links */}
        <div className="nav-content">
          <Link to="/Contactme" className="nav-link">Contact Me</Link>
          <Link to="/Aboutme" className="nav-link">About Me</Link>

          <Link to="/">
            <img src={logo} alt="Main Logo" className="nav-logo" />
          </Link>

          <Link to="/Services" className="nav-link">My Services</Link>
          <Link to="/BlogCard" className="nav-link">The Blogs</Link>
        </div>

        {/* Mobile dropdown menu */}
        <div className={`mobile-menu ${isOpen ? "show-menu" : ""}`}>
          {/* LOGO in mobile menu only */}
          <Link onClick={() => setIsOpen(false)} to="/" className="mobile-logo-link">
            <img src={logo} alt="Main Logo" className="mobile-logo" />
          </Link>

          <Link onClick={() => setIsOpen(false)} to="/Contactme">Contact Me</Link>
          <Link onClick={() => setIsOpen(false)} to="/Aboutme">About Me</Link>
          <Link onClick={() => setIsOpen(false)} to="/Services">My Services</Link>
          <Link onClick={() => setIsOpen(false)} to="/BlogCard">The Blogs</Link>
        </div>

      </header>
    </div>
  );
};

export default Nav;