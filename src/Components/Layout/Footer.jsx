import React from 'react';
import './Footer.css'; // Make sure your CSS is updated

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-inner">
        {/* Top section */}
        <div className="footer-top">
          <h1>Let's Connect there</h1>
          <button className="hire-btn">Hire me</button>
        </div>

        <hr />

        {/* Footer content */}
        <div className="footer-content">
          {/* Left section */}
          <div className="footer-left">
            <div className="logo-circle">كنزي</div>
            <p>
              UX/UI Designer crafting intuitive and impactful digital experiences.
              I focus on creating user-centered interfaces that combine visual clarity
              with meaningful interactions. Every detail — from color to flow — is
              shaped by research and empathy to ensure a seamless experience across
              web and mobile platforms.
            </p>

            <div className="socials">
              <i className="fa-brands fa-facebook-f"></i>
              <i className="fa-brands fa-youtube"></i>
              <i className="fa-brands fa-whatsapp"></i>
              <i className="fa-brands fa-instagram"></i>
              <i className="fa-brands fa-x-twitter"></i>
            </div>
          </div>

          {/* Navigation */}
          <div className="footer-nav">
            <h3>Navigation</h3>
            <ul>
              <li>Home</li>
              <li>About Us</li>
              <li>Service</li>
              <li>Resume</li>
              <li>Project</li>
            </ul>
          </div>

          {/* Contact */}
          <div className="footer-contact">
            <h3>Contact</h3>
            <p>0109500644</p>
            <p>Kenzyt719@gmail.com</p>
            <p>Kenzytarek.com</p>
          </div>

          {/* Newsletter */}
          <div className="footer-newsletter">
            <h3>Get the latest information</h3>
            <div className="newsletter">
              <input type="email" placeholder="Email Address" />
              <button>
                <i className="fa-solid fa-arrow-right"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;