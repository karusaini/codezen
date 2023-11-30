// Footer.js
import React from "react";
import "./Footer.css";
import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => (
  <footer className="footer">
    <div className="footer-links">
      <a href="/about">About Us</a>
      <a href="/contact">Contact</a>
      <a href="/terms">Terms</a>
    </div>
    <div className="social-icons">
      <a
        href="https://www.facebook.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaFacebookSquare />
      </a>
      <a
        href="https://www.twitter.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaTwitterSquare />
      </a>
      <a
        href="https://www.linkedin.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin />
      </a>
      <a
        href="https://www.instagram.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaInstagram />
      </a>
    </div>
  </footer>
);

export default Footer;
