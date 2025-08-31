import React, { useState, useEffect } from "react";
import { FaStar } from "react-icons/fa";
import { db } from "../firebase"; 
import { collection, addDoc, onSnapshot, query, orderBy } from "firebase/firestore";
import "./FeedbackForm.css";

const FeedbackForm = () => {
  const [name, setName] = useState("");
  const [feedback, setFeedback] = useState("");
  const [rating, setRating] = useState(0);
  const [testimonials, setTestimonials] = useState([]);
  const [avgRating, setAvgRating] = useState(0);

  const feedbackCollection = collection(db, "feedbacks");

  // Save feedback to Firestore
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !feedback || rating === 0) {
      alert("Please fill in all fields and select a rating!");
      return;
    }

    try {
      await addDoc(feedbackCollection, {
        name,
        feedback,
        rating,
        createdAt: new Date()
      });

      // Clear form
      setName("");
      setFeedback("");
      setRating(0);
    } catch (error) {
      console.error("Error adding feedback:", error);
    }
  };

  // Real-time fetch with onSnapshot
  useEffect(() => {
    const q = query(feedbackCollection, orderBy("createdAt", "desc"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const allFeedbacks = snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      setTestimonials(allFeedbacks);

      if (allFeedbacks.length > 0) {
        const total = allFeedbacks.reduce((sum, f) => sum + f.rating, 0);
        setAvgRating((total / allFeedbacks.length).toFixed(1));
      } else {
        setAvgRating(0);
      }
    });

    // cleanup when component unmounts
    return () => unsubscribe();
  }, []);

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

      {/* ⭐ Average Rating */}
      <div className="average-rating">
        <h3>⭐ {avgRating} / 5 ({testimonials.length} reviews)</h3>
      </div>

      <h3>What People Say</h3>
      <div className="testimonials">
        {testimonials.map((t) => (
          <div key={t.id} className="testimonial">
            <h4>{t.name}</h4>
            <p>{t.feedback}</p>
            <div>
              {[...Array(5)].map((star, i) => (
                <FaStar
                  key={i}
                  size={20}
                  color={i < t.rating ? "#ffc107" : "#e4e5e9"}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeedbackForm;
