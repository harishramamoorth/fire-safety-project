import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  FaArrowLeft, FaCheckCircle, FaFlask, FaTint, 
  FaIndustry, FaFlask as FaBeaker, FaChartLine, FaShippingFast
} from 'react-icons/fa';

const FoamConcentrates = () => {
  return (
    <>
      <Helmet>
        <title>Foam Concentrates Supply | FireSafe</title>
        <meta name="description" content="High-quality AFFF, AR-AFFF, and protein foam concentrates for industrial firefighting. UL/FM approved, sample testing available." />
      </Helmet>

      <div className="foam-service-page">
        {/* Hero Section with background image */}
        <div className="hero-section">
          <div className="hero-overlay"></div>
          <div className="container hero-content">
            <Link to="/services" className="back-link-light">
              <FaArrowLeft /> Back to Services
            </Link>
            <div className="hero-icon">
              <FaFlask />
            </div>
            <h1>Foam Concentrates</h1>
            <p>Premium firefighting foam for Class B hazards</p>
          </div>
        </div>

        <div className="container">
          {/* Introduction */}
          <div className="intro-section">
            <p className="lead-text">
              We supply and test high‑performance foam concentrates for oil & gas, marine, and chemical industries. 
              All products meet international standards and are backed by rigorous quality control.
            </p>
          </div>

          {/* Main Image – using your provided image */}
          <div className="main-image-wrapper">
            <img 
              src="/assets/images/1-8.png"
              alt="Fire safety equipment – foam concentrates"
              className="main-image"
            />
          </div>

          {/* Product Types Grid */}
          <div className="products-grid">
            <div className="product-card">
              <FaTint className="product-icon" />
              <h3>AFFF (1%, 3%, 6%)</h3>
              <p>UL/FM approved. Forms an aqueous film for rapid knockdown on hydrocarbon fires. Ideal for airports, refineries, and tank farms.</p>
            </div>
            <div className="product-card">
              <FaBeaker className="product-icon" />
              <h3>AR‑AFFF</h3>
              <p>Alcohol‑resistant foam for polar solvents (ethanol, acetone, etc.). Creates a protective polymeric membrane.</p>
            </div>
            <div className="product-card">
              <FaIndustry className="product-icon" />
              <h3>Protein & Fluoroprotein</h3>
              <p>Economical, heat‑resistant foams for subsurface injection into storage tanks. Long drain time for stable blankets.</p>
            </div>
            <div className="product-card">
              <FaShippingFast className="product-icon" />
              <h3>High Expansion Foam</h3>
              <p>Expansion ratios up to 1000:1. Ideal for enclosed spaces (mines, ship holds, warehouses).</p>
            </div>
          </div>

          {/* Key Features / Testing & Certification */}
          <div className="features-section">
            <h2>Testing & Certification</h2>
            <div className="features-grid">
              <div className="feature">
                <FaCheckCircle className="feature-check" />
                <span>UL / FM approved concentrates</span>
              </div>
              <div className="feature">
                <FaCheckCircle className="feature-check" />
                <span>EN 1568 compliant (Part 1‑4)</span>
              </div>
              <div className="feature">
                <FaCheckCircle className="feature-check" />
                <span>Foam sample testing (viscosity, pH, expansion, drain time)</span>
              </div>
              <div className="feature">
                <FaCheckCircle className="feature-check" />
                <span>Certificate of analysis with every batch</span>
              </div>
              <div className="feature">
                <FaCheckCircle className="feature-check" />
                <span>Compatible with fresh, sea, and brackish water</span>
              </div>
              <div className="feature">
                <FaCheckCircle className="feature-check" />
                <span>Long shelf life (up to 10 years for AFFF/AR‑AFFF)</span>
              </div>
            </div>
          </div>

          {/* Applications */}
          <div className="applications-section">
            <h2>Typical Applications</h2>
            <div className="applications-list">
              <span>Oil Refineries</span>
              <span>Airports (ARFF)</span>
              <span>Tank Farms</span>
              <span>Chemical Plants</span>
              <span>Marine Terminals</span>
              <span>Ethanol / Biofuel Facilities</span>
              <span>Fire Departments</span>
            </div>
          </div>

          {/* Technical Specifications Table */}
          <div className="specs-section">
            <h2>Technical Specifications</h2>
            <div className="specs-grid">
              <div className="spec-item">
                <span className="spec-label">Proportioning Ratios</span>
                <span className="spec-value">1%, 3%, 6% (depending on type)</span>
              </div>
              <div className="spec-item">
                <span className="spec-label">Shelf Life</span>
                <span className="spec-value">AFFF/AR‑AFFF: up to 10 years; Protein: 5 years</span>
              </div>
              <div className="spec-item">
                <span className="spec-label">Storage Temperature</span>
                <span className="spec-value">1°C to 50°C (protect from freezing)</span>
              </div>
              <div className="spec-item">
                <span className="spec-label">Flash Point</span>
                <span className="spec-value">&gt;100°C</span>
              </div>
              <div className="spec-item">
                <span className="spec-label">pH Range</span>
                <span className="spec-value">6.5 – 8.5 (AFFF/AR‑AFFF); 6.0 – 7.5 (Protein)</span>
              </div>
              <div className="spec-item">
                <span className="spec-label">Certifications</span>
                <span className="spec-value">UL, FM, EN 1568, ISO 9001</span>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="cta-section">
            <div className="cta-content">
              <h3>Need a sample or technical data sheet?</h3>
              <p>Request a free sample or ask for our foam selection guide.</p>
              <Link to="/contact" className="btn btn-large">Request a Sample →</Link>
            </div>
          </div>
        </div>
      </div>

      {/* Embedded CSS */}
      <style jsx>{`
        .foam-service-page {
          font-family: 'Poppins', 'Segoe UI', sans-serif;
          background: #f8fafc;
        }

        .hero-section {
          position: relative;
          background: linear-gradient(135deg, #0a2b3e 0%, #1a4a6f 100%);
          min-height: 400px;
          display: flex;
          align-items: center;
          color: white;
          margin-bottom: 60px;
          overflow: hidden;
        }

        .hero-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: url('/assets/images/1-8.png');
          background-size: cover;
          background-position: center;
          opacity: 0.15;
          z-index: 0;
        }

        .hero-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0,0,0,0.4);
          z-index: 1;
        }

        .hero-content {
          position: relative;
          z-index: 2;
          text-align: center;
          padding: 80px 20px;
        }

        .back-link-light {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: #ffd966;
          text-decoration: none;
          margin-bottom: 30px;
          font-weight: 500;
          transition: 0.3s;
        }

        .back-link-light:hover {
          color: white;
        }

        .hero-icon {
          font-size: 4rem;
          margin-bottom: 20px;
          animation: pulse 2s infinite;
        }

        @keyframes pulse {
          0% { transform: scale(1); opacity: 0.8; }
          50% { transform: scale(1.05); opacity: 1; }
          100% { transform: scale(1); opacity: 0.8; }
        }

        .hero-content h1 {
          font-size: 3rem;
          margin-bottom: 20px;
          font-weight: 700;
        }

        .hero-content p {
          font-size: 1.3rem;
          opacity: 0.9;
        }

        .lead-text {
          font-size: 1.2rem;
          line-height: 1.6;
          color: #1e293b;
          text-align: center;
          max-width: 800px;
          margin: 0 auto 40px;
        }

        .main-image-wrapper {
          margin: 40px 0;
          border-radius: 24px;
          overflow: hidden;
          box-shadow: 0 20px 40px rgba(0,0,0,0.1);
        }

        .main-image {
          width: 100%;
          height: auto;
          display: block;
          transition: transform 0.5s ease;
        }

        .main-image:hover {
          transform: scale(1.02);
        }

        .products-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 30px;
          margin: 60px 0;
        }

        .product-card {
          background: white;
          padding: 30px;
          border-radius: 20px;
          box-shadow: 0 10px 20px rgba(0,0,0,0.05);
          transition: 0.3s;
          text-align: center;
        }

        .product-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 30px rgba(0,0,0,0.1);
        }

        .product-icon {
          font-size: 2.5rem;
          color: #e63946;
          margin-bottom: 20px;
        }

        .product-card h3 {
          font-size: 1.4rem;
          margin-bottom: 15px;
          color: #0a2b3e;
        }

        .product-card p {
          color: #475569;
          line-height: 1.5;
        }

        .features-section {
          background: white;
          padding: 50px;
          border-radius: 24px;
          margin: 50px 0;
          text-align: center;
          box-shadow: 0 8px 20px rgba(0,0,0,0.05);
        }

        .features-section h2 {
          font-size: 2rem;
          color: #0a2b3e;
          margin-bottom: 30px;
        }

        .features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 20px;
          text-align: left;
        }

        .feature {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 10px;
          background: #f8fafc;
          border-radius: 12px;
        }

        .feature-check {
          color: #e63946;
          font-size: 1.2rem;
          flex-shrink: 0;
        }

        .feature span {
          color: #1e293b;
          font-weight: 500;
        }

        .applications-section {
          background: #ffffff;
          border-radius: 24px;
          padding: 40px;
          margin: 50px 0;
          text-align: center;
          border: 1px solid #e2e8f0;
        }

        .applications-section h2 {
          font-size: 2rem;
          color: #0a2b3e;
          margin-bottom: 25px;
        }

        .applications-list {
          display: flex;
          flex-wrap: wrap;
          gap: 15px;
          justify-content: center;
        }

        .applications-list span {
          background: #e8f0fe;
          padding: 10px 22px;
          border-radius: 40px;
          font-size: 0.9rem;
          font-weight: 500;
          color: #1d3557;
        }

        .specs-section {
          background: #ffffff;
          border-radius: 24px;
          padding: 40px;
          margin: 50px 0;
          border: 1px solid #e2e8f0;
        }

        .specs-section h2 {
          text-align: center;
          margin-bottom: 30px;
          color: #0a2b3e;
        }

        .specs-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 20px;
        }

        .spec-item {
          display: flex;
          justify-content: space-between;
          padding: 12px 0;
          border-bottom: 1px solid #e2e8f0;
        }

        .spec-label {
          font-weight: 600;
          color: #1e293b;
        }

        .spec-value {
          color: #e63946;
          font-weight: 500;
          text-align: right;
        }

        .cta-section {
          background: linear-gradient(135deg, #0a2b3e, #1a4a6f);
          border-radius: 24px;
          padding: 50px;
          text-align: center;
          margin: 60px 0 80px;
        }

        .cta-content h3 {
          font-size: 1.8rem;
          color: white;
          margin-bottom: 15px;
        }

        .cta-content p {
          color: #cbd5e1;
          margin-bottom: 25px;
        }

        .btn-large {
          display: inline-block;
          background: #e63946;
          color: white;
          padding: 12px 32px;
          border-radius: 40px;
          text-decoration: none;
          font-weight: 600;
          transition: 0.3s;
        }

        .btn-large:hover {
          background: #b91c2c;
          transform: scale(1.05);
        }

        @media (max-width: 992px) {
          .spec-item {
            flex-direction: column;
            gap: 5px;
          }
          .spec-value {
            text-align: left;
          }
        }

        @media (max-width: 768px) {
          .hero-content h1 { font-size: 2rem; }
          .hero-content p { font-size: 1rem; }
          .features-section { padding: 30px; }
          .specs-section { padding: 30px; }
          .features-section h2,
          .applications-section h2,
          .specs-section h2 {
            font-size: 1.5rem;
          }
        }
      `}</style>
    </>
  );
};

export default FoamConcentrates;