import React, { useState, useEffect } from "react";
import { FaQuoteLeft, FaStar } from "react-icons/fa";
import { database } from "../firebase"; // ✅ use database
import { ref, onValue } from "firebase/database"; // ✅ Realtime DB functions
import "./Testimonials.css";

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    const reviewsRef = ref(database, "reviews");
    onValue(reviewsRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const reviewsArray = Object.keys(data).map((key) => ({
          id: key,
          ...data[key],
        }));
        setTestimonials(reviewsArray.reverse()); // newest first
      } else {
        setTestimonials([]);
      }
    });
  }, []);

  return (
    <section className="testimonials-section">
      <h2 className="testimonials-title">What Clients Say</h2>
      <div className="testimonials-container">
        {testimonials.length === 0 ? (
          <p className="no-feedback">No feedback yet. Be the first to leave one!</p>
        ) : (
          testimonials.map((item) => (
            <div className="testimonial-card" key={item.id}>
              <FaQuoteLeft className="quote-icon" />
              <p className="testimonial-text">{item.feedback}</p>
              <div className="testimonial-rating">
                {Array(item.rating)
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
    </section>
  );
};

export default Testimonials;
