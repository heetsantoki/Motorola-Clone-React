import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
      
      {/* Top section: Logo + Social Media + Safe website */}
      <div className="footer-top">
        <div className="footer-section">
          <p className="footer-title">Official Website</p>
          <div className="footer-logo">
            <img src="/images/motorola-logo.png" alt="Motorola Logo" height="40" />
            <p className="footer-subtext">A Lenovo Company</p>
          </div>
        </div>

        <div className="footer-section">
          <p className="footer-title">Follow us on social media</p>
          <div className="footer-icons">
            <a href="https://www.instagram.com/motorolain/" target="_blank" rel="noopener noreferrer"><FaInstagram size={22} /></a>
            <a href="https://www.youtube.com/channel/UCo2M-E3Xd9oIQoznNfCDGcA" target="_blank" rel="noopener noreferrer"><FaYoutube size={22} /></a>
            <a href="https://x.com/motorolaindia" target="_blank" rel="noopener noreferrer"><FaTwitter size={22} /></a>
            <a href="https://www.facebook.com/MotorolaIN" target="_blank" rel="noopener noreferrer"><FaFacebook size={22} /></a>
          </div>
        </div>

        <div className="footer-section">
          <p className="footer-title">Safe Website</p>
          <img src="/images/protection.png" alt="Safe Website Icon" width="30" style={{ marginTop: "8px" }} />
        </div>
      </div>

      {/* Bottom section: Terms & conditions */}
      <div className="footer-bottom">
        <p>© 2025 Motorola Mobility LLC. All Rights Reserved</p>
        <p>
          MOTOROLA, the Stylized M Logo, MOTO and the MOTO family of marks are trademarks of
          Motorola Trademark Holdings, LLC. LENOVO is a trademark of Lenovo.
        </p>
        <p>
          All other trademarks are the property of their respective owners. © 2017 Motorola
          Mobility LLC.
        </p>
        <p>
          All mobile phones are designed and manufactured by Motorola Mobility LLC, a wholly
          owned subsidiary of Lenovo.
        </p>
      </div>
      </div>
    </footer>
  );
};

export default Footer;
