import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <h1 className="navbar-logo">เทคโนโลยีสารสนเทศ</h1>
        <ul className="navbar-links">
          <li><Link to="/">หน้าหลัก</Link></li>
          <li><Link to="/about">เกี่ยวกับเรา</Link></li>
          <li><Link to="/courses">หลักสูตร</Link></li>
          <li><Link to="/contact">ติดต่อเรา</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
