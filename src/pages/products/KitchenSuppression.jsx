import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { FaArrowLeft, FaCheckCircle, FaEnvelope, FaPhoneAlt, FaIndustry } from 'react-icons/fa';
import './ProductPage.css';

const KitchenSuppression = () => {
  return (
    <>
      <Helmet><title>Kitchen Fire Suppression System | FireSafe</title><meta name="description" content="UL 300 compliant wet chemical system for commercial kitchens. Automatic activation, protects cooking appliances." /></Helmet>
      <div className="product-page"><div className="container"><Link to="/products" className="back-link"><FaArrowLeft /> Back to Products</Link>
      <div className="product-header"><h1>Kitchen Fire Suppression System</h1><p>Wet chemical protection for cooking appliances</p></div>
      <div className="product-content-grid"><div className="product-gallery"><img src="https://images.unsplash.com/photo-1582139329536-e7284fece509?w=600" alt="Kitchen Suppression" /><div className="product-badge">UL 300</div></div>
      <div className="product-info"><div className="product-price">Contact for pricing</div><div className="product-rating">★★★★★ (33 reviews)</div><p className="product-description">UL 300 compliant wet chemical system designed specifically for commercial kitchen fire protection. Automatically activates to protect cooking appliances, hoods, and ducts.</p>
      <div className="product-specs"><h3>Specifications</h3><ul><li><strong>Agent:</strong> Wet chemical (potassium-based)</li><li><strong>Coverage:</strong> Up to 20ft hood length</li><li><strong>Discharge Time:</strong> &lt;30 seconds</li><li><strong>Cylinder Sizes:</strong> 2-8 gallons</li><li><strong>Activation:</strong> Automatic fusible links or manual</li></ul></div>
      <div className="product-features"><h3>Key Features</h3><ul><li><FaCheckCircle /> UL 300 compliant</li><li><FaCheckCircle /> Automatic activation</li><li><FaCheckCircle /> Stainless steel piping and nozzles</li><li><FaCheckCircle /> Easy maintenance</li></ul></div>
      <div className="product-actions"><Link to="/contact" className="btn btn-primary"><FaEnvelope /> Request Quote</Link><a href="tel:+97141234567" className="btn btn-outline"><FaPhoneAlt /> Call Expert</a></div></div></div>
      <div className="product-details-tabs"><div className="tab-content"><h3>Applications</h3><div className="applications-grid"><span>Commercial Kitchens</span><span>Restaurants</span><span>Cafeterias</span><span>Hotels</span><span>Fast Food Chains</span></div></div>
      <div className="maintenance-tips"><h3>📋 Maintenance & Usage</h3><ul><li>Professional inspection every 6 months.</li><li>Test fusible links and actuators annually.</li><li>Clean nozzles to prevent grease clogging.</li><li>After discharge, refill and reset system immediately.</li></ul></div></div></div></div>
    </>
  );
};
export default KitchenSuppression;