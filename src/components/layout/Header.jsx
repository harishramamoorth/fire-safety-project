import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaPhone, FaEnvelope, FaFireExtinguisher, FaChevronDown, FaBars, FaTimes, FaShieldAlt } from 'react-icons/fa';
import './Header.css';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const [productsDropdown, setProductsDropdown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const toggleServicesDropdown = (e) => {
    if (window.innerWidth <= 992) {
      e.preventDefault();
      setServicesDropdown(!servicesDropdown);
      setProductsDropdown(false);
    }
  };

  const toggleProductsDropdown = (e) => {
    if (window.innerWidth <= 992) {
      e.preventDefault();
      setProductsDropdown(!productsDropdown);
      setServicesDropdown(false);
    }
  };

  return (
    <>
      <div className="top-bar">
        <div className="container">
          <div className="top-bar-left">
            <span><FaPhone /> 24/7 Emergency: +971 4 123 4567</span>
            <span><FaEnvelope /> info@firesafe.com</span>
          </div>
          <div className="top-bar-right">
            <a href="#" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
            <a href="#" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
            <a href="#" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
            <a href="#" aria-label="YouTube"><i className="fab fa-youtube"></i></a>
          </div>
        </div>
      </div>

      <header className={`header ${scrolled ? 'scrolled' : ''}`}>
        <div className="container">
          <Link to="/" className="logo" onClick={closeMenu}>
            <div className="logo-icon">
              <FaFireExtinguisher />
            </div>
            <div className="logo-text">
              FIRE<span>&SAFETY</span>
              <small className="logo-sub"> Systems Engineering</small>
            </div>
          </Link>

          <div className={`nav-menu ${isOpen ? 'active' : ''}`}>
            <NavLink to="/" onClick={closeMenu}>Home</NavLink>
            <NavLink to="/about" onClick={closeMenu}>About Us</NavLink>
            
            {/* Services Dropdown */}
            <div className={`dropdown ${servicesDropdown ? 'open' : ''}`}>
              <span 
                className="dropdown-toggle" 
                onMouseEnter={() => window.innerWidth > 992 && setServicesDropdown(true)}
                onMouseLeave={() => window.innerWidth > 992 && setServicesDropdown(false)}
                onClick={toggleServicesDropdown}
              >
                Services <FaChevronDown className="chevron" />
              </span>
              <div className="dropdown-menu">
                <Link to="/services" onClick={closeMenu}>All Services</Link>
                <Link to="/services/fire-suppression-systems" onClick={closeMenu}>Fire Suppression Systems</Link>
                <Link to="/services/detection-alarm-systems" onClick={closeMenu}>Detection & Alarm Systems</Link>
                <Link to="/services/fire-extinguishers" onClick={closeMenu}>Fire Extinguishers</Link>
                <Link to="/services/foam-concentrates" onClick={closeMenu}>Foam Concentrates</Link>
                <Link to="/services/safety-training" onClick={closeMenu}>Safety Training</Link>
                <Link to="/services/certification-testing" onClick={closeMenu}>Certification & Testing</Link>
              </div>
            </div>

            {/* Products Dropdown */}
            <div className={`dropdown ${productsDropdown ? 'open' : ''}`}>
              <span 
                className="dropdown-toggle"
                onMouseEnter={() => window.innerWidth > 992 && setProductsDropdown(true)}
                onMouseLeave={() => window.innerWidth > 992 && setProductsDropdown(false)}
                onClick={toggleProductsDropdown}
              >
                Products <FaChevronDown className="chevron" />
              </span>
              <div className="dropdown-menu">
                <Link to="/products" onClick={closeMenu}>All Products</Link>
                <Link to="/products/abc-extinguisher" onClick={closeMenu}>ABC Extinguisher</Link>
                <Link to="/products/co2-extinguisher" onClick={closeMenu}>CO₂ Extinguisher</Link>
                <Link to="/products/afff-foam" onClick={closeMenu}>AFFF Foam</Link>
                <Link to="/products/ar-afff-foam" onClick={closeMenu}>AR-AFFF Foam</Link>
                <Link to="/products/protein-foam" onClick={closeMenu}>Protein Foam</Link>
                <Link to="/products/abc-powder" onClick={closeMenu}>ABC Powder</Link>
              </div>
            </div>

            <NavLink to="/projects" onClick={closeMenu}>Projects</NavLink>
           
            <NavLink to="/contact" onClick={closeMenu}>Contact</NavLink>
          </div>

          <div className="nav-actions">
            <Link to="/contact" className="btn-quote">Get Quote</Link>
            <button className="hamburger" onClick={toggleMenu}>
              {isOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;