import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footect-footer">
      <div className="footer-content">
        <p className="footer-brand">
          <strong>Footect</strong> &copy; {new Date().getFullYear()} — Designed & Developed by Arno
        </p>
        
        
        <div className="footer-contact-info">
          <span>📧 Email: arnoshkaminasyan@gmail.com</span>
          <span>💼 GitHub / Portfolio: github.com/arno10k </span>
        </div>

        <div className="footer-links">
          <span>About Footect</span>
          <span>Privacy Policy</span>
          <span>Terms of Service</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;