import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import WhyChooseMe from "./components/WhyChooseMe";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      {/* Navbar */}         
      <Navbar />
      <h1 style={{ textAlign: "center", marginTop: "80px" }}>
        Welcome to Abhishek Giri’s Portfolio (Criminal Lawyer)
      </h1>
      <Hero />
      <About />
      <Services/>
      <WhyChooseMe/>
      <Testimonials/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
