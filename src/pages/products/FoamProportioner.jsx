import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { FaArrowLeft, FaCheckCircle, FaEnvelope, FaPhoneAlt, FaIndustry } from 'react-icons/fa';
import './ProductPage.css';

const FoamProportioner = () => {
  return (
    <>
      <Helmet><title>Foam Proportioner | FireSafe</title><meta name="description" content="Inline foam proportioning system for accurate concentrate injection. 1%, 3%, 6% ratios, wide flow range." /></Helmet>
      <div className="product-page"><div className="container"><Link to="/products" className="back-link"><FaArrowLeft /> Back to Products</Link>
      <div className="product-header"><h1>Foam Proportioner</h1><p>Accurate foam concentrate injection</p></div>
      <div className="product-content-grid"><div className="product-gallery"><img src="https://images.unsplash.com/photo-1582139329536-e7284fece509?w=600" alt="Foam Proportioner" /><div className="product-badge">1/3/6%</div></div>
      <div className="product-info"><div className="product-price">Contact for pricing</div><div className="product-rating">★★★★☆ (14 reviews)</div><p className="product-description">Inline foam proportioning system ensures accurate foam concentrate injection into the water stream for effective fire suppression. Reliable and low maintenance.</p>
      <div className="product-specs"><h3>Specifications</h3><ul><li><strong>Proportioning Ratios:</strong> 1%, 3%, 6%</li><li><strong>Flow Range:</strong> 100-5000 L/min</li><li><strong>Pressure Range:</strong> 5-15 bar</li><li><strong>Material:</strong> Stainless Steel / Bronze</li><li><strong>Accuracy:</strong> ±5%</li></ul></div>
      <div className="product-features"><h3>Key Features</h3><ul><li><FaCheckCircle /> Accurate proportioning</li><li><FaCheckCircle /> Low maintenance</li><li><FaCheckCircle /> Wide flow range</li><li><FaCheckCircle /> Reliable operation</li></ul></div>
      <div className="product-actions"><Link to="/contact" className="btn btn-primary"><FaEnvelope /> Request Quote</Link><a href="tel:+97141234567" className="btn btn-outline"><FaPhoneAlt /> Call Expert</a></div></div></div>
      <div className="product-details-tabs"><div className="tab-content"><h3>Applications</h3><div className="applications-grid"><span>Fire Trucks</span><span>Fixed Systems</span><span>Skid Units</span><span>Mobile Equipment</span><span>Industrial Plants</span></div></div>
      <div className="maintenance-tips"><h3>📋 Maintenance & Usage</h3><ul><li>Flush with fresh water after each use.</li><li>Inspect seals and gaskets annually.</li><li>Calibrate proportioning accuracy every 2 years.</li><li>Use only with compatible foam concentrates.</li></ul></div></div></div></div>
    </>
  );
};
export default FoamProportioner;