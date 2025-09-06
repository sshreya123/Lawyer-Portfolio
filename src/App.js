import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import WhyChooseMe from "./components/WhyChooseMe";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import FeedbackForm from "./components/FeedbackForm";

function App() {
  return (
    <div className="App">
      <Navbar />
      <h1 style={{ textAlign: "center", marginTop: "80px" }}>
        Welcome – You’re in the Right Place for Trusted Legal Support
      </h1>

      <Hero />
      <About />
      <Services />
      <WhyChooseMe />
      <Contact />

      {/* Centered Feedback Form */}
      <div className="feedback-wrapper">
        <FeedbackForm />
      </div>

      {/* Testimonials Section */}
      {/* <Testimonials /> */}

      <Footer />
    </div>
  );
}

export default App;
