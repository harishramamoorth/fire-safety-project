import React from 'react';
import { FaPhone, FaEnvelope, FaFacebookF, FaTwitter, FaLinkedinIn, FaYoutube } from 'react-icons/fa';
import './TopBar.css';

const TopBar = () => {
  return (
    <div className="top-bar">
      <div className="container">
        <div className="top-bar-left">
          <span><FaPhone /> 24/7 Emergency: +971****67</span>
          <span><FaEnvelope /> MRG@firesafe.com</span>
        </div>
        <div className="top-bar-right">
          <a href="#" aria-label="Facebook"><FaFacebookF /></a>
          <a href="#" aria-label="Twitter"><FaTwitter /></a>
          <a href="#" aria-label="LinkedIn"><FaLinkedinIn /></a>
          <a href="#" aria-label="YouTube"><FaYoutube /></a>
        </div>
      </div>
    </div>
  );
};

export default TopBar;