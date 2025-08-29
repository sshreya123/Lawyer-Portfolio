import React from "react";
import "./Footer.css";
import { FaTwitter, FaEnvelope, FaPhone } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Branding */}
        <div className="footer-brand">
          <h3>Abhishek</h3>
          <p>© {new Date().getFullYear()} All Rights Reserved</p>
        </div>

        {/* Contact Info */}
        <div className="footer-contact">
          <a href="mailto:abhishek@example.com">
            <FaEnvelope /> adv.abhishek2703@gmail.com
          </a>
          <a href="tel:9807657986">
            <FaPhone /> +91 9807657986
          </a>
        </div>

        {/* Social Links */}
        <div className="footer-socials">
          <a href="https://twitter.com/ABHISHE18531212" target="_blank" rel="noreferrer">
            <FaTwitter />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
