import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { FaArrowLeft, FaCheckCircle, FaEnvelope, FaPhoneAlt, FaIndustry } from 'react-icons/fa';
import './ProductPage.css';

const FoamExtinguisher = () => {
  return (
    <>
      <Helmet><title>Foam Fire Extinguisher | FireSafe</title><meta name="description" content="AFFF foam extinguisher for Class A and B fires. 9L capacity, marine approved. Forms a blanket on flammable liquids." /></Helmet>
      <div className="product-page"><div className="container"><Link to="/products" className="back-link"><FaArrowLeft /> Back to Products</Link>
      <div className="product-header"><h1>Foam Fire Extinguisher</h1><p>AFFF foam for flammable liquid fires</p></div>
      <div className="product-content-grid"><div className="product-gallery"><img src="https://images.unsplash.com/photo-1582139329536-e7284fece509?w=600" alt="Foam Extinguisher" /><div className="product-badge">Marine Approved</div></div>
      <div className="product-info"><div className="product-price">Contact for pricing</div><div className="product-rating">★★★★★ (78 reviews)</div><p className="product-description">AFFF foam extinguisher creates a floating blanket on flammable liquids, smothering the fire and preventing re-ignition. Ideal for fuel-related fires. Marine approved version available.</p>
      <div className="product-specs"><h3>Specifications</h3><ul><li><strong>Capacity:</strong> 9L</li><li><strong>Working Pressure:</strong> 15 bar</li><li><strong>Discharge Time:</strong> 18 seconds</li><li><strong>Range:</strong> 5-6 meters</li><li><strong>Temperature Range:</strong> -10°C to +60°C</li><li><strong>Warranty:</strong> 5 years</li></ul></div>
      <div className="product-features"><h3>Key Features</h3><ul><li><FaCheckCircle /> Class A & B fires</li><li><FaCheckCircle /> Fast knockdown and vapor sealing</li><li><FaCheckCircle /> Marine approved option</li><li><FaCheckCircle /> Corrosion-resistant finish</li></ul></div>
      <div className="product-actions"><Link to="/contact" className="btn btn-primary"><FaEnvelope /> Request Quote</Link><a href="tel:+97141234567" className="btn btn-outline"><FaPhoneAlt /> Call Expert</a></div></div></div>
      <div className="product-details-tabs"><div className="tab-content"><h3>Applications</h3><div className="applications-grid"><span>Fuel Stations</span><span>Parking Garages</span><span>Marine Vessels</span><span>Aircraft Hangars</span><span>Chemical Plants</span></div></div>
      <div className="tab-content"><h3>Certifications</h3><div className="cert-badges"><span>CE</span><span>BS EN3</span><span>MED</span><span>ISO 9001</span></div></div>
      <div className="maintenance-tips"><h3>📋 Maintenance & Usage</h3><ul><li>Check pressure gauge monthly.</li><li>Inspect for corrosion, especially on marine units.</li><li>Do not use on live electrical equipment.</li><li>Annual professional service required.</li></ul></div></div></div></div>
    </>
  );
};
export default FoamExtinguisher;