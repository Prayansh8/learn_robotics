import React from "react";
import "./Footer.css"; // Import the CSS file

const Footer = () => {
  return (
    <div class="footer">
      <a href="/" className="mb-md-0 color-white text-decoration-none lh-1">
        <img src={logo} alt="Company logo" className="logoimg color-white" />
      </a>
      &copy; 2023 Robotics Education Platform - Developed by&nbsp;
      <span>
        <a href="https://prayanshgupta.com/" class="red-text">
          Prayansh Gupta.
        </a>
      </span>
    </div>
  );
};

export default Footer;
