import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { FaArrowLeft, FaCheckCircle, FaEnvelope, FaPhoneAlt, FaIndustry } from 'react-icons/fa';
import './ProductPage.css';

const PurpleK = () => {
  return (
    <>
      <Helmet><title>Purple K Dry Chemical Powder | FireSafe</title><meta name="description" content="Potassium bicarbonate based powder for superior Class B fire performance. UL/FM approved, low corrosion." /></Helmet>
      <div className="product-page"><div className="container"><Link to="/products" className="back-link"><FaArrowLeft /> Back to Products</Link>
      <div className="product-header"><h1>Purple K Dry Chemical Powder</h1><p>High-performance Class B agent</p></div>
      <div className="product-content-grid"><div className="product-gallery"><img src="https://images.unsplash.com/photo-1582139329536-e7284fece509?w=600" alt="Purple K" /><div className="product-badge">UL/FM</div></div>
      <div className="product-info"><div className="product-price">Contact for pricing</div><div className="product-rating">★★★★★ (53 reviews)</div><p className="product-description">Purple K dry chemical powder (potassium bicarbonate) offers superior performance on Class B fires. Widely used in oil and gas applications, airports, and military installations.</p>
      <div className="product-specs"><h3>Specifications</h3><ul><li><strong>Particle Size:</strong> &lt;75 microns</li><li><strong>Bulk Density:</strong> 1.2 kg/L</li><li><strong>Moisture:</strong> &lt;0.5%</li><li><strong>Shelf Life:</strong> 5 years</li><li><strong>Color:</strong> Purple</li></ul></div>
      <div className="product-features"><h3>Key Features</h3><ul><li><FaCheckCircle /> Class B fires</li><li><FaCheckCircle /> High efficiency two to three times more effective than BC</li><li><FaCheckCircle /> UL/FM approved</li><li><FaCheckCircle /> Low corrosion potential</li></ul></div>
      <div className="product-actions"><Link to="/contact" className="btn btn-primary"><FaEnvelope /> Request Quote</Link><a href="tel:+97141234567" className="btn btn-outline"><FaPhoneAlt /> Call Expert</a></div></div></div>
      <div className="product-details-tabs"><div className="tab-content"><h3>Applications</h3><div className="applications-grid"><span>Oil & Gas</span><span>Airports</span><span>Military</span><span>Industrial Plants</span><span>Refineries</span></div></div>
      <div className="maintenance-tips"><h3>📋 Storage & Handling</h3><ul><li>Store in dry, cool area.</li><li>Do not mix with other dry chemicals.</li><li>Use dedicated Purple K extinguishers.</li><li>Annual flow testing recommended.</li></ul></div></div></div></div>
    </>
  );
};
export default PurpleK;