import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { FaArrowLeft, FaCheckCircle, FaEnvelope, FaPhoneAlt, FaIndustry, FaTint } from 'react-icons/fa';
import './ProductPage.css';

const FoamChamber = () => {
  return (
    <>
      <Helmet>
        <title>Foam Chamber | FireSafe</title>
        <meta name="description" content="Stainless steel foam chamber for atmospheric storage tanks. UL listed, easy installation." />
      </Helmet>
      <div className="product-page">
        <div className="container">
          <Link to="/products" className="back-link"><FaArrowLeft /> Back to Products</Link>
          <div className="product-header">
            <h1>Foam Chamber</h1>
            <p>Reliable foam delivery for storage tanks</p>
          </div>
          <div className="product-content-grid">
            <div className="product-gallery">
              <img src="https://images.unsplash.com/photo-1582139329536-e7284fece509?w=600" alt="Foam Chamber" />
              <div className="product-badge">SS304</div>
            </div>
            <div className="product-info">
              <div className="product-price">Contact for pricing</div>
              <div className="product-rating">★★★★☆ (18 reviews)</div>
              <p className="product-description">Foam chamber provides reliable foam delivery to atmospheric storage tanks. Designed for easy installation on the tank shell. Includes foam maker, gaskets, and mounting hardware.</p>
              <div className="product-specs">
                <h3>Specifications</h3>
                <ul>
                  <li><strong>Material:</strong> SS304</li>
                  <li><strong>Size:</strong> 2" to 8"</li>
                  <li><strong>Working Pressure:</strong> 150 psi</li>
                  <li><strong>Temperature Range:</strong> -20 to 200°F</li>
                  <li><strong>Connection:</strong> Flanged</li>
                </ul>
              </div>
              <div className="product-features">
                <h3>Key Features</h3>
                <ul>
                  <li><FaCheckCircle /> Stainless steel construction</li>
                  <li><FaCheckCircle /> Corrosion resistant</li>
                  <li><FaCheckCircle /> UL listed</li>
                  <li><FaCheckCircle /> Includes foam maker and gaskets</li>
                </ul>
              </div>
              <div className="product-actions">
                <Link to="/contact" className="btn btn-primary"><FaEnvelope /> Request Quote</Link>
                <a href="tel:+97141234567" className="btn btn-outline"><FaPhoneAlt /> Call Expert</a>
              </div>
            </div>
          </div>
          <div className="product-details-tabs">
            <div className="tab-content">
              <h3>Applications</h3>
              <div className="applications-grid">
                <span><FaIndustry /> Storage Tanks</span>
                <span><FaIndustry /> Dike Areas</span>
                <span><FaIndustry /> Process Vessels</span>
                <span><FaIndustry /> Marine Terminals</span>
                <span><FaIndustry /> Tank Farms</span>
              </div>
            </div>
            <div className="tab-content">
              <h3>Certifications</h3>
              <div className="cert-badges"><span>UL</span><span>ISO 9001</span></div>
            </div>
            <div className="maintenance-tips">
              <h3>📋 Maintenance & Usage</h3>
              <ul>
                <li>Inspect gaskets annually.</li>
                <li>Check for corrosion on tank shell around chamber.</li>
                <li>Test foam flow every 5 years.</li>
                <li>Keep foam maker clean of debris.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FoamChamber;   // ← CRITICAL: must be present