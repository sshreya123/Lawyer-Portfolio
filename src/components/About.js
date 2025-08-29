import React from "react";
import "./About.css";
import { FaBalanceScale, FaGavel, FaUserShield } from "react-icons/fa";
import abhishekImg from "../assets/HC1.jpg"; // lawyer image

const About = () => {
  return (
    <section className="about-section" id="about">
      <div className="about-container">
        
        {/* Left Image */}
        <div className="about-image">
          <img src={abhishekImg} alt="Lawyer Abhishek" />
        </div>

        {/* Right Content */}
        <div className="about-content">
          <h2 className="about-title">About <span>Adv. Abhishek</span></h2>
          <p className="about-description">
            With years of dedicated practice, <strong>Advocate Abhishek</strong> has 
            built a strong reputation for delivering justice with integrity. 
            His expertise covers <em>constitutional law, civil rights, and 
            high-profile litigation</em>. Known for his <strong>sharp advocacy</strong>, 
            he provides unmatched legal guidance to clients nationwide.
          </p>

          {/* Icons Section */}
          <div className="about-icons">
            <div className="icon-box">
              <FaBalanceScale className="icon" />
              <h4>Fair Justice</h4>
              <p>Committed to equality & justice in every case.</p>
            </div>

            <div className="icon-box">
              <FaGavel className="icon" />
              <h4>Expert Advocacy</h4>
              <p>Strong representation in High Court & beyond.</p>
            </div>

            <div className="icon-box">
              <FaUserShield className="icon" />
              <h4>Trusted Guidance</h4>
              <p>Reliable legal advice with utmost confidentiality.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
