import React from "react";
import { Button } from "@mui/material";
import "./Hero.css"; // ✅ Keep CSS in same folder if you prefer
import HighCourt from "../assets/HighCourt.jpg";
import HCVideo from "../assets/HC4.mp4";

const Hero = () => {
  return (
    <div className="hero" id="hero">
      {/* Background Image */}
      <div className="hero-bg">
        <img src={HighCourt} alt="High Court" className="hero-image" />
      </div>

      {/* Overlay */}
      <div className="hero-overlay">
        <div className="hero-content">
          <h1 className="hero-title">Advocate Abhishek Giri</h1>
          <p className="hero-subtitle">
            Specializing in Criminal Law | Justice with Dedication
          </p>
          {/* <Button
            variant="contained"
            color="primary"
            size="large"
            className="hero-btn"
          >
            Book Consultation
          </Button> */}
          <Button
            variant="contained"
            color="primary"
            size="large"
            className="hero-btn"
            onClick={() =>
              document
                .getElementById("contact")
                .scrollIntoView({ behavior: "smooth" })
            }
          >
            Book Consultation
          </Button>
        </div>

        {/* Video Section */}
        <div className="hero-video">
          <video autoPlay muted loop playsInline>
            <source src={HCVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
};

export default Hero;
