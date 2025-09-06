import React, { useState, useEffect } from "react";
import { FaStar } from "react-icons/fa";
import { database } from "../firebase";
import { ref, push, onValue } from "firebase/database";
import "./FeedbackForm.css";

const FeedbackForm = () => {
  const [name, setName] = useState("");
  const [feedback, setFeedback] = useState("");
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(null);
  const [reviews, setReviews] = useState([]);

  // Load reviews from Realtime Database
  useEffect(() => {
    const reviewsRef = ref(database, "reviews");
    onValue(reviewsRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const reviewsArray = Object.keys(data).map((key) => ({
          id: key,
          ...data[key],
        }));
        setReviews(reviewsArray.reverse()); // newest first
      } else {
        setReviews([]);
      }
    });
  }, []);

  const handleSubmit = (e) => {
  e.preventDefault();
  if (!name || !feedback || rating === 0) {
    alert("Please fill all fields and select a rating.");
    return;
  }

  const reviewsRef = ref(database, "reviews"); // points to /reviews
  push(reviewsRef, {
    name,
    feedback,
    rating,
    createdAt: Date.now()
  });

  // Clear form
  setName("");
  setFeedback("");
  setRating(0);
  setHover(null);
};

  return (
    <div className="feedback-wrapper">
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
            placeholder="Your Feedback"
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
          />
          <div className="rating-stars">
            {[...Array(5)].map((_, index) => {
              const currentRating = index + 1;
              return (
                <label key={index}>
                  <input
                    type="radio"
                    name="rating"
                    value={currentRating}
                    onClick={() => setRating(currentRating)}
                    style={{ display: "none" }}
                  />
                  <FaStar
                    size={30}
                    color={
                      currentRating <= (hover || rating) ? "#ffc107" : "#e4e5e9"
                    }
                    onMouseEnter={() => setHover(currentRating)}
                    onMouseLeave={() => setHover(null)}
                    style={{ cursor: "pointer", marginRight: "5px" }}
                  />
                </label>
              );
            })}
          </div>
          <button type="submit">Submit</button>
        </form>

        <h3>What People Say</h3>
        <div className="reviews-container">
          {reviews.length === 0 ? (
            <p className="no-reviews">No feedback yet. Be the first to leave one!</p>
          ) : (
            reviews.map((rev) => (
              <div className="testimonial-card" key={rev.id}>
                <p className="testimonial-text">{rev.feedback}</p>
                <div className="testimonial-rating">
                  {[...Array(5)].map((_, i) => (
                    <FaStar
                      key={i}
                      color={i < rev.rating ? "#ffc107" : "#e4e5e9"}
                    />
                  ))}
                </div>
                <h4 className="testimonial-name">- {rev.name}</h4>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default FeedbackForm;
