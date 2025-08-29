import React from "react";
import "./Testimonials.css";
import { FaQuoteLeft, FaStar } from "react-icons/fa";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Rahul Sharma",
      feedback:
        "Advocate Abhishek is very professional and guided me throughout the bail process. Highly recommend!",
      rating: 5,
    },
    {
      name: "Priya Verma",
      feedback:
        "He handled my case with great expertise. I felt confident and supported at every step.",
      rating: 4,
    },
    {
      name: "Amit Singh",
      feedback:
        "Excellent lawyer, knowledgeable in criminal matters and provides clear advice.",
      rating: 5,
    },
  ];

  return (
    <section className="testimonials-section" id="testimonials">
      <h2 className="testimonials-title">What Clients Say</h2>
      <div className="testimonials-container">
        {testimonials.map((item, index) => (
          <div className="testimonial-card" key={index}>
            <FaQuoteLeft className="quote-icon" />
            <p className="testimonial-text">{item.feedback}</p>
            <div className="testimonial-rating">
              {Array(item.rating)
                .fill()
                .map((_, i) => (
                  <FaStar key={i} className="star" />
                ))}
            </div>
            <h4 className="testimonial-name">- {item.name}</h4>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
