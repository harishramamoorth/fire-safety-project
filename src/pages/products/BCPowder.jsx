import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { FaArrowLeft, FaCheckCircle, FaEnvelope, FaPhoneAlt, FaIndustry } from 'react-icons/fa';
import './ProductPage.css';

const BCPowder = () => {
  return (
    <>
      <Helmet><title>BC Dry Chemical Powder | FireSafe</title><meta name="description" content="Sodium bicarbonate based powder for Class B and C fires. High extinguishing rate, free flowing." /></Helmet>
      <div className="product-page"><div className="container"><Link to="/products" className="back-link"><FaArrowLeft /> Back to Products</Link>
      <div className="product-header"><h1>BC Dry Chemical Powder</h1><p>For flammable liquid and gas fires</p></div>
      <div className="product-content-grid"><div className="product-gallery"><img src="https://images.unsplash.com/photo-1582139329536-e7284fece509?w=600" alt="BC Powder" /><div className="product-badge">Sodium Bicarb</div></div>
      <div className="product-info"><div className="product-price">Contact for pricing</div><div className="product-rating">★★★★☆ (41 reviews)</div><p className="product-description">BC dry chemical powder (sodium bicarbonate based) is specially formulated for Class B (flammable liquids) and Class C (flammable gases) fires. Provides rapid flame knockdown.</p>
      <div className="product-specs"><h3>Specifications</h3><ul><li><strong>Particle Size:</strong> &lt;75 microns</li><li><strong>Bulk Density:</strong> 1.0 kg/L</li><li><strong>Moisture:</strong> &lt;0.5%</li><li><strong>Shelf Life:</strong> 5 years</li><li><strong>Color:</strong> White</li></ul></div>
      <div className="product-features"><h3>Key Features</h3><ul><li><FaCheckCircle /> Class B & C fires</li><li><FaCheckCircle /> High extinguishing rate</li><li><FaCheckCircle /> Free flowing</li><li><FaCheckCircle /> Non-abrasive</li></ul></div>
      <div className="product-actions"><Link to="/contact" className="btn btn-primary"><FaEnvelope /> Request Quote</Link><a href="tel:+97141234567" className="btn btn-outline"><FaPhoneAlt /> Call Expert</a></div></div></div>
      <div className="product-details-tabs"><div className="tab-content"><h3>Applications</h3><div className="applications-grid"><span>Gas Stations</span><span>Chemical Storage</span><span>Laboratories</span><span>Vehicle Fires</span><span>Gas Processing</span></div></div>
      <div className="maintenance-tips"><h3>📋 Storage & Usage</h3><ul><li>Keep containers tightly sealed.</li><li>Store in dry environment.</li><li>Do not mix with ABC powder (different chemistries).</li><li>Use only in BC-rated extinguishers.</li></ul></div></div></div></div>
    </>
  );
};
export default BCPowder;