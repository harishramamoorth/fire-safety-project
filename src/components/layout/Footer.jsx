import React from 'react';
import { Link } from 'react-router-dom';
import { FaFireExtinguisher, FaMapMarkerAlt, FaPhone, FaEnvelope, FaFacebookF, FaTwitter, FaLinkedinIn, FaYoutube } from 'react-icons/fa';
import NewsletterForm from '../forms/NewsletterForm';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col">
            <div className="logo">
              <div className="logo-icon">
                <FaFireExtinguisher />
              </div>
              <div className="logo-text">FIRE<span>&SAFETY</span></div>
            </div>
            <p>Protecting lives, environment, and property worldwide with innovative fire safety solutions.</p>
            <div className="social-links">
              <a href="#"><FaFacebookF /></a>
              <a href="#"><FaTwitter /></a>
              <a href="#"><FaLinkedinIn /></a>
              <a href="#"><FaYoutube /></a>
            </div>
          </div>

          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/products">Products</Link></li>
              <li><Link to="/projects">Projects</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

           <div className="footer-col">
            <h4>Our Services</h4>
            <ul>
              <li><Link to="/services/fire-suppression-systems">Fire Suppression Systems</Link></li>
              <li><Link to="/services/detection-alarm-systems">Detection & Alarm Systems</Link></li>
              <li><Link to="/services/foam-concentrates">Foam Concentrates</Link></li>
              <li><Link to="/services/safety-training">Safety Training</Link></li>
              <li><Link to="/services/certification-testing">Certification & Testing</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Contact Info</h4>
            <ul className="contact-info">
              <li><FaMapMarkerAlt /> Dubai, United Arab Emirates</li>
              <li><FaPhone /> +971******67</li>
              <li><FaEnvelope /> MRG@firesafe.com</li>
            </ul>
            <NewsletterForm />
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2026 Fire&Safety Systems Engineering. All rights reserved.</p>
          <p>"Safety is not just a word; it's the way of life."</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;