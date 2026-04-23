import React from 'react';
import { Link } from 'react-router-dom';
import { FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import './CTASection.css';

const CTASection = () => {
  return (
    <section className="cta-section">
      <div className="container">
        <div className="cta-content" data-aos="zoom-in">
          <h2>Ready to Secure Your Facility?</h2>
          <p>Contact us today for a free consultation and quote. Our experts are ready to help you choose the right fire protection solution.</p>
          <div className="cta-buttons">
            <Link to="/contact" className="btn btn-primary">
              <FaEnvelope /> Get a Quote
            </Link>
            <a href="tel:+97141234567" className="btn btn-outline">
              <FaPhoneAlt /> Call Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;