import React from "react";
import "../styles/ContactUs.css";

// Import your assets (make sure these images exist in your src/assets folder)
import email from "../assets/images/email.png";
import moli from "../assets/images/moli.png";
import whatsapp from "../assets/images/whatsapp.png";

const ContactUs = () => {
  return (
    <div className="contact-container">
      <h2>Contact us</h2>

      {/* Chat Section */}
      <div className="chat-box">
        <h3>Chat</h3>
        <div className="chat-options">
          <div className="chat-item">
            <img src={moli} alt="Moli" />
            <p>Moli</p>
          </div>
          <div className="chat-item">
            <a
              href="https://wa.me/your-number"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={whatsapp} alt="WhatsApp English" />
              <p>WhatsApp English</p>
            </a>
          </div>
          <div className="chat-item">
            <a
              href="https://wa.me/your-hindi-number"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={whatsapp} alt="WhatsApp Hindi" />
              <p>WhatsApp Hindi (हिंदी)</p>
            </a>
          </div>
        </div>
      </div>

      {/* Support Section */}
      <div className="support-box">
        <div className="support-item">
          <img src={email} alt="Email" />
          <p>Email</p>
        </div>
        
        <div className="support-item">
          <img src={email} alt="Support" />
          <p>Flipkart/Premium Smartphone Support</p>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
