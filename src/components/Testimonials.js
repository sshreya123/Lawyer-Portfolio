import React, { useState, useEffect } from "react";
import "./Testimonials.css";
import { FaQuoteLeft, FaStar } from "react-icons/fa";
import FeedbackForm from "./FeedbackForm";

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);

  // Load from localStorage when component mounts
  useEffect(() => {
    const savedTestimonials = localStorage.getItem("testimonials");
    if (savedTestimonials) {
      setTestimonials(JSON.parse(savedTestimonials));
    }
  }, []);

  // Save to localStorage whenever testimonials change
  useEffect(() => {
    if (testimonials.length > 0) {
      localStorage.setItem("testimonials", JSON.stringify(testimonials));
    }
  }, [testimonials]);

  const addTestimonial = (newTestimonial) => {
    const updated = [{ ...newTestimonial, rating: Number(newTestimonial.rating) }, ...testimonials];
    setTestimonials(updated);
    localStorage.setItem("testimonials", JSON.stringify(updated)); // immediate save
  };

  return (
    <section className="testimonials-section" id="testimonials">
      <h2 className="testimonials-title">What Clients Say</h2>

      <div className="testimonials-container">
        {testimonials.length === 0 ? (
          <p className="no-feedback">No feedback yet. Be the first to leave one!</p>
        ) : (
          testimonials.map((item, index) => (
            <div className="testimonial-card" key={index}>
              <FaQuoteLeft className="quote-icon" />
              <p className="testimonial-text">{item.feedback}</p>
              <div className="testimonial-rating">
                {Array(Number(item.rating))
                  .fill()
                  .map((_, i) => (
                    <FaStar key={i} className="star filled" />
                  ))}
              </div>
              <h4 className="testimonial-name">- {item.name}</h4>
            </div>
          ))
        )}
      </div>

      {/* Feedback Form */}
      <FeedbackForm addTestimonial={addTestimonial} />
    </section>
  );
};

export default Testimonials;
