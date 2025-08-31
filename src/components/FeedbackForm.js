import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import "./FeedbackForm.css";

const FeedbackForm = ({ addTestimonial }) => {
  const [name, setName] = useState("");
  const [feedback, setFeedback] = useState("");
  const [rating, setRating] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !feedback || rating === 0) {
      alert("Please fill in all fields and select a rating!");
      return;
    }

    // Add new testimonial
    addTestimonial({ name, feedback, rating });

    // Clear form
    setName("");
    setFeedback("");
    setRating(0);
  };

  return (
    <div className="feedback-form">
      <h2>Leave Your Feedback</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <textarea
          placeholder="Write your feedback..."
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
        />
        
        <div className="rating-stars">
          {[1, 2, 3, 4, 5].map((star) => (
            <FaStar
              key={star}
              size={24}
              className={star <= rating ? "star selected" : "star"}
              onClick={() => setRating(star)}
            />
          ))}
        </div>

        <button type="submit">Submit Feedback</button>
      </form>
    </div>
  );
};

export default FeedbackForm;
