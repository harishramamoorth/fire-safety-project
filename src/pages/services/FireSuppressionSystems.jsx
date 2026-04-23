import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  FaArrowLeft, FaCheckCircle, FaTint, FaFireExtinguisher, 
  FaShieldAlt, FaIndustry, FaWrench, FaChartLine, FaCogs
} from 'react-icons/fa';

const FireSuppressionSystems = () => {
  return (
    <>
      <Helmet>
        <title>Fire Suppression Systems | FireSafe</title>
        <meta name="description" content="Foam-based and gas-based fire suppression systems for industrial and commercial applications. Compliant with NFPA and EN standards." />
      </Helmet>

      <div className="suppression-service-page">
        {/* Hero Section with your local background image */}
        <div className="hero-section">
          <div className="hero-overlay"></div>
          <div className="container hero-content">
            <Link to="/services" className="back-link-light">
              <FaArrowLeft /> Back to Services
            </Link>
            <div className="hero-icon">
              <FaTint />
            </div>
            <h1>Fire Suppression Systems</h1>
            <p>Foam‑based & Gas‑based solutions for critical assets</p>
          </div>
        </div>

        <div className="container">
          {/* Introduction */}
          <div className="intro-section">
            <p className="lead-text">
              FireSafe offers comprehensive fire suppression systems engineered for high‑risk environments. 
              Our solutions are designed, installed, and maintained to meet the highest international safety standards.
            </p>
          </div>

          {/* Main Image – using your local image */}
          <div className="main-image-wrapper">
            <img 
              src="/assets/images/Foam-1-1.png"
              alt="Fire suppression system"
              className="main-image"
            />
          </div>

          {/* Features Grid */}
          <div className="features-grid">
            <div className="feature-card">
              <FaTint className="feature-icon" />
              <h3>Foam‑based Systems</h3>
              <p>AFFF, AR‑AFFF and Protein concentrates for Class B hydrocarbon and polar solvent fires. Effective spill and tank fire protection.</p>
            </div>
            <div className="feature-card">
              <FaFireExtinguisher className="feature-icon" />
              <h3>Gas Suppression</h3>
              <p>FM200, Novec 1230 & CO₂ clean agents for data centers, control rooms, and critical electronics — no residue, safe for occupied spaces.</p>
            </div>
            <div className="feature-card">
              <FaShieldAlt className="feature-icon" />
              <h3>Water Mist</h3>
              <p>Fine water droplets (typically &lt;100 μm) cool the fire, displace oxygen, and block radiant heat. Ideal for turbines, transformers, and marine applications.</p>
            </div>
          </div>

          {/* System Technologies Section */}
          <div className="technologies-section">
            <h2>Advanced Fire Suppression Technologies</h2>
            <div className="tech-grid">
              <div className="tech-item">
                <h3>AFFF Foam Concentrate</h3>
                <p>Forms an aqueous film that rapidly spreads over hydrocarbon fuels, sealing vapors and preventing re‑ignition.</p>
              </div>
              <div className="tech-item">
                <h3>AR‑AFFF Foam Concentrate</h3>
                <p>Alcohol‑resistant foam creates a protective polymer membrane for polar solvent fires (ethanol, acetone, etc.).</p>
              </div>
              <div className="tech-item">
                <h3>Protein Foam Concentrate</h3>
                <p>Heat‑resistant, stable blanket for subsurface injection into storage tanks; economical and biodegradable.</p>
              </div>
              <div className="tech-item">
                <h3>Clean Agent (FM200 / Novec 1230)</h3>
                <p>Discharge in ≤10 seconds, zero residue, electrically non‑conductive. Novec 1230 has zero ozone depletion potential (ODP) and a short atmospheric life.</p>
              </div>
              <div className="tech-item">
                <h3>CO₂ Systems</h3>
                <p>Total flooding or local application for industrial hazards such as paint booths, flammable liquid storage, and gas turbines.</p>
              </div>
              <div className="tech-item">
                <h3>High‑Pressure Water Mist</h3>
                <p>Uses less water than traditional sprinklers, minimal water damage, and effective on Class A, B, and C fires.</p>
              </div>
            </div>
          </div>

          {/* How to Use / Maintenance & Standards */}
          <div className="maintenance-section">
            <h2>Maintenance, Testing & Compliance</h2>
            <div className="maintenance-grid">
              <div className="maintenance-card">
                <FaWrench className="maintenance-icon" />
                <h3>Monthly Inspections</h3>
                <p>Check control panels, cylinder pressure, pipe integrity, and nozzle condition. Document all observations.</p>
              </div>
              <div className="maintenance-card">
                <FaChartLine className="maintenance-icon" />
                <h3>Annual Professional Testing</h3>
                <p>Full system flow tests, foam concentrate sampling (per EN 13565‑2), and enclosure integrity tests for gas systems.</p>
              </div>
              <div className="maintenance-card">
                <FaCogs className="maintenance-icon" />
                <h3>Regulatory Standards</h3>
                <p>All systems comply with NFPA 11 (foam), NFPA 2001 (clean agents), NFPA 750 (water mist), and EN 13565‑2 (foam). Design, installation, testing, and maintenance follow these codes.</p>
              </div>
              <div className="maintenance-card">
                <FaCheckCircle className="maintenance-icon" />
                <h3>After Discharge</h3>
                <p>Refill agent, reset detection, replace discharged cylinders, and clean nozzles immediately. Conduct a full system function test before returning to service.</p>
              </div>
            </div>
          </div>

          {/* Applications & Industries */}
          <div className="applications-section">
            <h2>Key Applications</h2>
            <div className="applications-list">
              <span>Oil & Gas Refineries</span>
              <span>Chemical & Petrochemical Plants</span>
              <span>Data Centers & Server Rooms</span>
              <span>Power Generation Facilities</span>
              <span>Aircraft Hangars & Marine Vessels</span>
              <span>Flammable Liquid Storage Tanks</span>
            </div>
          </div>

          {/* Technical Specifications Table */}
          <div className="specs-section">
            <h2>Technical Specifications</h2>
            <div className="specs-grid">
              <div className="spec-item">
                <span className="spec-label">Foam Proportioning</span>
                <span className="spec-value">1%, 3%, 6% (AFFF / AR-AFFF / Protein)</span>
              </div>
              <div className="spec-item">
                <span className="spec-label">Clean Agent Discharge Time</span>
                <span className="spec-value">≤10 seconds (FM200 / Novec 1230)</span>
              </div>
              <div className="spec-item">
                <span className="spec-label">Water Mist Droplet Size</span>
                <span className="spec-value">&lt;100 μm (high‑pressure systems)</span>
              </div>
              <div className="spec-item">
                <span className="spec-label">Operating Pressure (Water Mist)</span>
                <span className="spec-value">60‑200 bar</span>
              </div>
              <div className="spec-item">
                <span className="spec-label">Foam Concentrate Shelf Life</span>
                <span className="spec-value">AFFF / AR-AFFF: up to 10 years; Protein: 5 years in original containers</span>
              </div>
              <div className="spec-item">
                <span className="spec-label">Certifications & Standards</span>
                <span className="spec-value">NFPA 11, NFPA 2001, NFPA 750, EN 13565‑2, UL, FM, CE</span>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="cta-section">
            <div className="cta-content">
              <h3>Protect Your Critical Assets with a Custom‑Engineered System</h3>
              <p>Our experts will design a suppression solution tailored to your specific fire risk and facility layout — fully compliant, sustainable, and reliable.</p>
              <Link to="/contact" className="btn btn-large">Request a Free Consultation →</Link>
            </div>
          </div>
        </div>
      </div>

      {/* Embedded CSS – background image updated to your local file */}
      <style jsx>{`
        .suppression-service-page {
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
          background-image: url('/assets/images/Foam-1-1.png');
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

        .features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 30px;
          margin: 60px 0;
        }

        .feature-card {
          background: white;
          padding: 30px;
          border-radius: 20px;
          box-shadow: 0 10px 20px rgba(0,0,0,0.05);
          transition: 0.3s;
          text-align: center;
        }

        .feature-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 30px rgba(0,0,0,0.1);
        }

        .feature-icon {
          font-size: 2.5rem;
          color: #e63946;
          margin-bottom: 20px;
        }

        .feature-card h3 {
          font-size: 1.4rem;
          margin-bottom: 15px;
          color: #0a2b3e;
        }

        .feature-card p {
          color: #475569;
          line-height: 1.5;
        }

        .technologies-section {
          background: white;
          padding: 50px;
          border-radius: 24px;
          margin: 50px 0;
          box-shadow: 0 8px 20px rgba(0,0,0,0.05);
        }

        .technologies-section h2 {
          text-align: center;
          font-size: 2rem;
          color: #0a2b3e;
          margin-bottom: 30px;
        }

        .tech-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 25px;
        }

        .tech-item {
          background: #f8fafc;
          padding: 20px;
          border-radius: 16px;
          border-left: 4px solid #e63946;
        }

        .tech-item h3 {
          font-size: 1.2rem;
          margin-bottom: 10px;
          color: #1e293b;
        }

        .tech-item p {
          color: #475569;
          font-size: 0.95rem;
          line-height: 1.5;
        }

        .maintenance-section {
          background: #ffffff;
          border-radius: 24px;
          padding: 50px;
          margin: 50px 0;
          border: 1px solid #e2e8f0;
        }

        .maintenance-section h2 {
          text-align: center;
          font-size: 2rem;
          color: #0a2b3e;
          margin-bottom: 40px;
        }

        .maintenance-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 30px;
        }

        .maintenance-card {
          text-align: center;
          padding: 20px;
        }

        .maintenance-icon {
          font-size: 2rem;
          color: #e63946;
          margin-bottom: 15px;
        }

        .maintenance-card h3 {
          font-size: 1.2rem;
          margin-bottom: 12px;
          color: #1e293b;
        }

        .maintenance-card p {
          color: #475569;
          font-size: 0.95rem;
          line-height: 1.5;
        }

        .applications-section {
          background: white;
          padding: 40px;
          border-radius: 24px;
          margin: 50px 0;
          text-align: center;
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
          .technologies-section { padding: 30px; }
          .maintenance-section { padding: 30px; }
          .specs-section { padding: 30px; }
          .technologies-section h2,
          .maintenance-section h2,
          .applications-section h2,
          .specs-section h2 {
            font-size: 1.5rem;
          }
        }
      `}</style>
    </>
  );
};

export default FireSuppressionSystems;