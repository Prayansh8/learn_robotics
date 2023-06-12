import React from "react";
import "./navbar.css";
import { FaBookReader } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navicon">
        <FaBookReader /> <div>Robotics Education Platform</div>
      </div>
    </div>
  );
};

export default Navbar;
