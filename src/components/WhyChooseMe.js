import React from "react";
import { FaUserTie, FaBalanceScale, FaGavel, FaHandsHelping } from "react-icons/fa";
import "./WhyChooseMe.css";

const WhyChooseMe = () => {
  return (
    <section className="why-choose-section">
      <h2 className="why-choose-title">Why Choose Advocate Abhishek?</h2>
      <div className="why-choose-container">
        <div className="why-card">
          <FaUserTie className="why-icon" />
          <h3>Experienced Representation</h3>
          <p>Handled a wide range of criminal and civil cases with proven results.</p>
        </div>
        <div className="why-card">
          <FaBalanceScale className="why-icon" />
          <h3>Strong Legal Expertise</h3>
          <p>Specialized knowledge in IPC, NDPS, POCSO, and Cyber Crime matters.</p>
        </div>
        <div className="why-card">
          <FaGavel className="why-icon" />
          <h3>Client-Focused Approach</h3>
          <p>Dedicated to protecting client rights with a strategic legal approach.</p>
        </div>
        <div className="why-card">
          <FaHandsHelping className="why-icon" />
          <h3>Trust & Transparency</h3>
          <p>Clear communication and honest guidance at every stage of the case.</p>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseMe;
