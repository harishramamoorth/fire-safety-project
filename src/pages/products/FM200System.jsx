import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { FaArrowLeft, FaCheckCircle, FaEnvelope, FaPhoneAlt, FaIndustry } from 'react-icons/fa';
import './ProductPage.css';

const FM200System = () => {
  return (
    <>
      <Helmet><title>FM200 Fire Suppression System | FireSafe</title><meta name="description" content="Clean agent FM200 system for data centers and electronic equipment. No residue, safe for occupied spaces." /></Helmet>
      <div className="product-page"><div className="container"><Link to="/products" className="back-link"><FaArrowLeft /> Back to Products</Link>
      <div className="product-header"><h1>FM200 Fire Suppression System</h1><p>Clean agent for sensitive electronics</p></div>
      <div className="product-content-grid"><div className="product-gallery"><img src="https://images.unsplash.com/photo-1582139329536-e7284fece509?w=600" alt="FM200 System" /><div className="product-badge">No Residue</div></div>
      <div className="product-info"><div className="product-price">Contact for pricing</div><div className="product-rating">★★★★★ (61 reviews)</div><p className="product-description">FM200 clean agent fire suppression system is ideal for protecting valuable electronic equipment. Leaves no residue and is safe for occupied spaces. Fast discharge within 10 seconds.</p>
      <div className="product-specs"><h3>Specifications</h3><ul><li><strong>Agent:</strong> HFC-227ea</li><li><strong>Discharge Time:</strong> &lt;10 sec</li><li><strong>Design Standard:</strong> NFPA 2001</li><li><strong>Cylinder Size:</strong> 100-300L</li><li><strong>Concentration:</strong> 7%</li></ul></div>
      <div className="product-features"><h3>Key Features</h3><ul><li><FaCheckCircle /> Clean agent – no residue</li><li><FaCheckCircle /> Safe for occupied spaces</li><li><FaCheckCircle /> Fast discharge</li><li><FaCheckCircle /> UL/FM listed components</li></ul></div>
      <div className="product-actions"><Link to="/contact" className="btn btn-primary"><FaEnvelope /> Request Quote</Link><a href="tel:+97141234567" className="btn btn-outline"><FaPhoneAlt /> Call Expert</a></div></div></div>
      <div className="product-details-tabs"><div className="tab-content"><h3>Applications</h3><div className="applications-grid"><span>Data Centers</span><span>Server Rooms</span><span>Museums</span><span>Medical Facilities</span><span>Telecom Centers</span></div></div>
      <div className="maintenance-tips"><h3>📋 Maintenance & Usage</h3><ul><li>Annual cylinder weighing and inspection.</li><li>Check detection system functionality monthly.</li><li>After discharge, refill immediately.</li><li>Train staff on manual release procedures.</li></ul></div></div></div></div>
    </>
  );
};
export default FM200System;