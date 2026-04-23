import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { FaArrowLeft, FaCheckCircle, FaEnvelope, FaPhoneAlt, FaIndustry } from 'react-icons/fa';
import './ProductPage.css';

const WetChemicalExtinguisher = () => {
  return (
    <>
      <Helmet>
        <title>Wet Chemical Extinguisher | FireSafe</title>
        <meta name="description" content="UL 300 compliant wet chemical extinguisher for Class F kitchen fires." />
      </Helmet>
      <div className="product-page">
        <div className="container">
          <Link to="/products" className="back-link"><FaArrowLeft /> Back to Products</Link>
          <div className="product-header">
            <h1>Wet Chemical Fire Extinguisher</h1>
            <p>Specialized for commercial kitchen fires (Class F)</p>
          </div>
          <div className="product-content-grid">
            <div className="product-gallery">
              <img src="https://images.unsplash.com/photo-1582139329536-e7284fece509?w=600" alt="Wet Chemical Extinguisher" />
              <div className="product-badge">UL 300 Compliant</div>
            </div>
            <div className="product-info">
              <div className="product-price">Contact for pricing</div>
              <div className="product-rating">★★★★★ (64 reviews)</div>
              <p className="product-description">Wet chemical fire extinguisher specifically designed for Class F fires involving cooking oils and fats. Creates a soap-like layer to prevent re-ignition.</p>
              <div className="product-specs">
                <h3>Specifications</h3>
                <ul>
                  <li><strong>Capacity:</strong> 6L</li>
                  <li><strong>Working Pressure:</strong> 12 bar</li>
                  <li><strong>Discharge Time:</strong> 30 seconds</li>
                  <li><strong>Range:</strong> 3-4 meters</li>
                  <li><strong>Temperature Range:</strong> -20°C to +60°C</li>
                </ul>
              </div>
              <div className="product-features">
                <h3>Key Features</h3>
                <ul>
                  <li><FaCheckCircle /> Class F fires (cooking oils/fats)</li>
                  <li><FaCheckCircle /> Stainless steel cylinder</li>
                  <li><FaCheckCircle /> Kitemark certified</li>
                  <li><FaCheckCircle /> Safe for use on hot oils</li>
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
                <span><FaIndustry /> Commercial Kitchens</span>
                <span><FaIndustry /> Restaurants</span>
                <span><FaIndustry /> Cafeterias</span>
                <span><FaIndustry /> Hotels</span>
              </div>
            </div>
            <div className="tab-content">
              <h3>Certifications</h3>
              <div className="cert-badges"><span>CE</span><span>BS EN3</span><span>UL 300</span><span>ISO 9001</span></div>
            </div>
            <div className="maintenance-tips">
              <h3>📋 Maintenance & Usage</h3>
              <ul>
                <li>Check pressure gauge monthly.</li>
                <li>Annually inspect by certified technician.</li>
                <li>Do not use on electrical fires.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WetChemicalExtinguisher;   // ← CRITICAL