import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { FaArrowLeft, FaCheckCircle, FaEnvelope, FaPhoneAlt, FaIndustry } from 'react-icons/fa';
import './ProductPage.css';

const FoamMonitor = () => {
  return (
    <>
      <Helmet><title>Foam Monitor | FireSafe</title><meta name="description" content="Remote controlled foam monitor for large area fire protection. High flow capacity, 360° rotation, weather resistant." /></Helmet>
      <div className="product-page"><div className="container"><Link to="/products" className="back-link"><FaArrowLeft /> Back to Products</Link>
      <div className="product-header"><h1>Foam Monitor</h1><p>High‑capacity remote controlled foam delivery</p></div>
      <div className="product-content-grid"><div className="product-gallery"><img src="https://images.unsplash.com/photo-1582139329536-e7284fece509?w=600" alt="Foam Monitor" /><div className="product-badge">High Flow</div></div>
      <div className="product-info"><div className="product-price">Contact for pricing</div><div className="product-rating">★★★★☆ (22 reviews)</div><p className="product-description">Foam monitor provides high-capacity foam delivery for large area fire protection. Can be operated manually or remotely with electric or hydraulic controls.</p>
      <div className="product-specs"><h3>Specifications</h3><ul><li><strong>Flow Rate:</strong> 500-5000 L/min</li><li><strong>Material:</strong> Aluminum / Stainless Steel</li><li><strong>Range:</strong> 40-80 meters</li><li><strong>Pressure:</strong> 7-12 bar</li><li><strong>Rotation:</strong> 360° horizontal, -30° to +90° vertical</li></ul></div>
      <div className="product-features"><h3>Key Features</h3><ul><li><FaCheckCircle /> Remote or manual control</li><li><FaCheckCircle /> High flow capacity</li><li><FaCheckCircle /> Weather resistant</li><li><FaCheckCircle /> Corrosion-resistant bearings</li></ul></div>
      <div className="product-actions"><Link to="/contact" className="btn btn-primary"><FaEnvelope /> Request Quote</Link><a href="tel:+97141234567" className="btn btn-outline"><FaPhoneAlt /> Call Expert</a></div></div></div>
      <div className="product-details-tabs"><div className="tab-content"><h3>Applications</h3><div className="applications-grid"><span>Tank Farms</span><span>Loading Racks</span><span>Aircraft Hangars</span><span>Process Areas</span><span>Refineries</span></div></div>
      <div className="maintenance-tips"><h3>📋 Maintenance & Usage</h3><ul><li>Lubricate bearings annually.</li><li>Test remote functions monthly.</li><li>Inspect for corrosion on exposed parts.</li><li>Flush with fresh water after foam use.</li></ul></div></div></div></div>
    </>
  );
};
export default FoamMonitor;