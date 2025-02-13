import React from "react";
import "./contactUs.css";

const ContactUs = (props) => {
  return (
    <div className="contactus-container" data-aos={props["data-aos"]} >
      <h2 className="contactus-heading">Get in Touch</h2>
      <p className="contactus-subheading">
        Have a question or want to share feedback? We'd love to hear from you!
      </p>
      <div className="contactus-content">
        {/* Contact Form */}
        <div className="contactus-form">
          <h3 className="form-heading">Contact Us</h3>
          <form>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="form-input"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="form-input"
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              className="form-textarea"
              rows="5"
              required
            ></textarea>
            <button type="submit" className="form-button">
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Information */}
        <div className="contactus-info">
          <h3 className="info-heading">Contact Information</h3>
          <p className="info-item">
            <strong>📍 Address:</strong> 123 Foodies Street, Gourmet City, FL
          </p>
          <p className="info-item">
            <strong>📞 Phone:</strong> +1 (555) 123-4567
          </p>
          <p className="info-item">
            <strong>📧 Email:</strong> support@foodiesdelight.com
          </p>
          <p className="info-item">
            <strong>⏰ Hours:</strong> Mon-Sun, 9:00 AM - 11:00 PM
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
