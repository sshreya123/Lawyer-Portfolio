import React, { useRef, useState } from "react";
import emailjs from "emailjs-com"; // or "@emailjs/browser"
import "./Contact.css";
import HC3 from "../assets/HC3.jpg";

const Contact = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(""); // success/error message

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    emailjs
      .sendForm(
        "service_vlgtisn", // Service ID
        "template_q7i3sws", // Template ID
        form.current,
        "qkkdOoGeDNnHdMdDA" // Public Key
      )
      .then(
        () => {
          setLoading(false);
          setStatus("✅ Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          console.error("EmailJS Error:", error);
          setLoading(false);
          setStatus("❌ Failed to send message, please try again.");
        }
      );
  };

  return (
    <section className="contact" id="contact">
      <h2>Contact Me</h2>
      <div className="contact-container">
        {/* Lawyer Image */}
        <div className="contact-image">
          <img src={HC3} alt="Abhishek" />
        </div>

        {/* Contact Form */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" placeholder="Your Message" required />

          <button type="submit" disabled={loading}>
            {loading ? <span className="spinner"></span> : "Send Message"}
          </button>

          {status && <p className="form-status">{status}</p>}
        </form>
      </div>
    </section>
  );
};

export default Contact;
