import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { FaArrowLeft, FaCheckCircle, FaEnvelope, FaPhoneAlt, FaIndustry } from 'react-icons/fa';
import './ProductPage.css';

const Novec1230System = () => {
  return (
    <>
      <Helmet><title>Novec 1230 Fire Suppression System | FireSafe</title><meta name="description" content="Fluoroketone clean agent with zero ozone depletion. Eco-friendly, safe for electronics, NFPA 2001 compliant." /></Helmet>
      <div className="product-page"><div className="container"><Link to="/products" className="back-link"><FaArrowLeft /> Back to Products</Link>
      <div className="product-header"><h1>Novec 1230 Fire Suppression System</h1><p>Eco‑friendly clean agent</p></div>
      <div className="product-content-grid"><div className="product-gallery"><img src="https://images.unsplash.com/photo-1582139329536-e7284fece509?w=600" alt="Novec 1230" /><div className="product-badge">ODP=0</div></div>
      <div className="product-info"><div className="product-price">Contact for pricing</div><div className="product-rating">★★★★★ (47 reviews)</div><p className="product-description">Novec 1230 fluid is a fluoroketone clean agent with zero ozone depletion potential and very low global warming potential. Safe for occupied spaces and leaves no residue.</p>
      <div className="product-specs"><h3>Specifications</h3><ul><li><strong>Agent:</strong> FK-5-1-12</li><li><strong>Discharge Time:</strong> &lt;10 sec</li><li><strong>Design Standard:</strong> NFPA 2001</li><li><strong>Cylinder Size:</strong> 50-300L</li><li><strong>Concentration:</strong> 5.5%</li></ul></div>
      <div className="product-features"><h3>Key Features</h3><ul><li><FaCheckCircle /> Zero ozone depletion (ODP=0)</li><li><FaCheckCircle /> Low global warming potential</li><li><FaCheckCircle /> Safe for electronics and people</li><li><FaCheckCircle /> No residue</li></ul></div>
      <div className="product-actions"><Link to="/contact" className="btn btn-primary"><FaEnvelope /> Request Quote</Link><a href="tel:+97141234567" className="btn btn-outline"><FaPhoneAlt /> Call Expert</a></div></div></div>
      <div className="product-details-tabs"><div className="tab-content"><h3>Applications</h3><div className="applications-grid"><span>Data Centers</span><span>Control Rooms</span><span>Archives</span><span>Telecommunications</span><span>Clean Rooms</span></div></div>
      <div className="maintenance-tips"><h3>📋 Maintenance & Usage</h3><ul><li>Annual inspection of cylinders and detection.</li><li>Monitor for leaks in sealed enclosures.</li><li>Refill with genuine Novec 1230 only.</li><li>Train personnel on safety and operation.</li></ul></div></div></div></div>
    </>
  );
};
export default Novec1230System;