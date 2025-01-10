import React from "react";
import "./Navbar.css"; // เชื่อมไฟล์ CSS สำหรับสไตล์
import logo from "../../assets/logo.png"; // นำเข้าภาพโลโก้

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="Logo" /> {/* ใช้โลโก้ที่ import มา */}
      </div>
      <ul className="navbar-menu">
        <li><a href="#home">Home</a></li>
        <li><a href="#terms">Trader training</a></li>
        <li>
          <a href="#about">Challenge</a>
          <ul className="dropdown">
            <li><a href="#team">EA-robottade</a></li>
            <li><a href="#story">การใช้โปรแกรม</a></li>
          </ul>
        </li>
        <li><a href="#affiliate">EA-robottade</a></li>
        <li><a href="#faq">การใช้โปรแกรม</a></li>
        <li><a href="#faq">About Us </a></li>
      </ul>
      <div className="navbar-buttons">
        <button className="signup">Sign up</button>
        <button className="dashboard">Dashboard</button>
      </div>
    </nav>
  );
};

export default Navbar;
