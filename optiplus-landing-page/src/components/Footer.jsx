import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTiktok } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Branches Section */}
        <div className="footer-section">
          <h3>Our Branches</h3>
          <p>Along Moi Avenue Opposite Imenti House – Nacico Chambers Nairobi, Kenya</p>
          <p>Ronald Ngala Street Opposite The Post Office Nairobi, Kenya</p>
        </div>

        {/* Contact Section */}
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>Phone: +254 702 220 545</p>
          <p>Phone: +254 105 165 560</p>
          <p>Email: info@optikenya.com</p>
        </div>

        {/* Quick Links Section */}
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/products">Products</a></li>
          </ul>
        </div>

        {/* More Links Section */}
        <div className="footer-section">
          <h3>More Links</h3>
          <ul>
            <li><a href="/frames">Frames</a></li>
            <li><a href="/lenses">Lenses</a></li>
            <li><a href="/sunglasses">Sunglasses</a></li>
            <li><a href="/contact-lenses">Contact Lenses</a></li>
          </ul>
        </div>

        {/* Business Hours Section */}
        <div className="footer-section">
          <h3>Business Hours</h3>
          <p>Monday – Friday: 9:00am – 6:00pm</p>
          <p>Saturdays: 9:00am – 4:00pm</p>
          <p>Closed On Sundays & Public Holidays</p>
        </div>

        {/* Social Media Section */}
        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="https://facebook.com/optiplus" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href="https://instagram.com/optiplus" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="https://tiktok.com/optiplus" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faTiktok} />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>&copy; 2023 OptiPlus. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;