import React, { useState } from "react";
import "./Header.css";
import Logo from "../assets/web.png";

const Header = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    alert(`Searching for: ${searchTerm}`);
  };
  return (
    <nav className="app_navbar">
      <div className="app_navbar-logo">
        <img src={Logo} alt="app-logo" />
      </div>

      <ul className="app_navabr-links">
        <li className="p_opensans">
          <a href="#header">Header</a>
        </li>

        <li className="p_opensans">
          <a href="#hero">Hero</a>
        </li>

        <li className="p_opensans">
          <a href="#features">Features</a>
        </li>

        <li className="p_opensans">
          <a href="#testimonials">Testimonials</a>
        </li>

        <li className="p_opensans">
          <a href="#footer">Footer</a>
        </li>
      </ul>

      <form className="example" action="action_page.php">
        <input
          type="text"
          placeholder="Search.."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          name="search"
        />
        <button type="submit">
          <i className="fa fa-search" onClick={handleSearch} />
        </button>
      </form>
    </nav>
  );
};

export default Header;
