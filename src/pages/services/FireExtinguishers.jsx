import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  FaArrowLeft, FaCheckCircle, FaFireExtinguisher, FaWrench, 
  FaShieldAlt, FaCertificate, FaChartLine, FaTools
} from 'react-icons/fa';

const FireExtinguishersService = () => {
  return (
    <>
      <Helmet>
        <title>Fire Extinguisher Services | FireSafe</title>
        <meta name="description" content="Supply, installation, maintenance, and refilling of all types of fire extinguishers. Compliant with BS EN3 and local regulations." />
      </Helmet>

      <div className="extinguisher-service-page">
        {/* Hero Section with background image */}
        <div className="hero-section">
          <div className="hero-overlay"></div>
          <div className="container hero-content">
            <Link to="/services" className="back-link-light">
              <FaArrowLeft /> Back to Services
            </Link>
            <div className="hero-icon">
              <FaFireExtinguisher />
            </div>
            <h1>Fire Extinguisher Services</h1>
            <p>Complete lifecycle management – supply, install, maintain, recharge</p>
          </div>
        </div>

        <div className="container">
          {/* Introduction */}
          <div className="intro-section">
            <p className="lead-text">
              We supply, install, inspect, and recharge all types of portable fire extinguishers. 
              From ABC dry powder to CO₂, wet chemical, and foam – we ensure your equipment is always ready.
            </p>
          </div>

          {/* Main Image – using your local image */}
          <div className="main-image-wrapper">
            <img 
              src="/assets/images/fire-extinguisher.webp"
              alt="Fire extinguisher service"
              className="main-image"
            />
          </div>

          {/* Services Grid */}
          <div className="services-grid">
            <div className="service-card">
              <FaFireExtinguisher className="service-icon" />
              <h3>Supply & Installation</h3>
              <p>All types: ABC dry powder, CO₂, wet chemical, foam, clean agent. Correct placement and mounting.</p>
            </div>
            <div className="service-card">
              <FaWrench className="service-icon" />
              <h3>Annual Maintenance</h3>
              <p>Full inspection, pressure check, and certification. Compliant with BS EN3 and local civil defence rules.</p>
            </div>
            <div className="service-card">
              <FaChartLine className="service-icon" />
              <h3>Hydrostatic Testing</h3>
              <p>Periodic pressure testing of cylinders to ensure structural integrity and safety.</p>
            </div>
            <div className="service-card">
              <FaTools className="service-icon" />
              <h3>Refilling & Recharging</h3>
              <p>Fast turnaround for discharged or partially used extinguishers – back to full operational status.</p>
            </div>
            <div className="service-card">
              <FaShieldAlt className="service-icon" />
              <h3>Wall Cabinets & Signage</h3>
              <p>Durable cabinets, brackets, and clear identification signs to meet regulatory requirements.</p>
            </div>
            <div className="service-card">
              <FaCertificate className="service-icon" />
              <h3>Certification & Logbook</h3>
              <p>Detailed service reports and digital logbooks for audit trails and compliance records.</p>
            </div>
          </div>

          {/* How to Use / Maintenance Steps */}
          <div className="maintenance-steps">
            <h2>Extinguisher Maintenance – Best Practices</h2>
            <div className="steps-grid">
              <div className="step">
                <div className="step-number">1</div>
                <h3>Monthly Visual Check</h3>
                <p>Ensure gauge is in green zone, no physical damage, pin & seal intact, and clear access.</p>
              </div>
              <div className="step">
                <div className="step-number">2</div>
                <h3>Annual Professional Service</h3>
                <p>Certified technician will inspect, weigh, test pressure, and re‑tag the extinguisher.</p>
              </div>
              <div className="step">
                <div className="step-number">3</div>
                <h3>Hydrostatic Testing</h3>
                <p>Every 5–12 years depending on type (e.g., CO₂ every 10 years, dry powder every 5 years).</p>
              </div>
              <div className="step">
                <div className="step-number">4</div>
                <h3>After Any Use</h3>
                <p>Even partial discharge requires immediate refilling or replacement. Do not return to service without recharging.</p>
              </div>
            </div>
          </div>

          {/* Technical Specifications Table */}
          <div className="specs-section">
            <h2>Extinguisher Types & Specifications</h2>
            <div className="specs-grid">
              <div className="spec-item">
                <span className="spec-label">ABC Dry Powder</span>
                <span className="spec-value">Class A, B, C – 1kg to 9kg – Stored pressure</span>
              </div>
              <div className="spec-item">
                <span className="spec-label">CO₂</span>
                <span className="spec-value">Class B & Electrical – 2kg, 5kg – Non‑residue</span>
              </div>
              <div className="spec-item">
                <span className="spec-label">Wet Chemical</span>
                <span className="spec-value">Class F (kitchen oils) – 6L – UL 300 compliant</span>
              </div>
              <div className="spec-item">
                <span className="spec-label">Foam (AFFF)</span>
                <span className="spec-value">Class A & B – 6L/9L – Marine approved option</span>
              </div>
              <div className="spec-item">
                <span className="spec-label">Service Standard</span>
                <span className="spec-value">BS EN3 – CE marked – ISO 9001 certified</span>
              </div>
              <div className="spec-item">
                <span className="spec-label">Inspection Frequency</span>
                <span className="spec-value">Monthly (visual) – Annual (professional)</span>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="cta-section">
            <div className="cta-content">
              <h3>Ensure your extinguishers are always ready</h3>
              <p>Schedule a professional inspection or request a quote for new units and refills.</p>
              <Link to="/contact" className="btn btn-large">Request Service →</Link>
            </div>
          </div>
        </div>
      </div>

      {/* Embedded CSS – Green & White Theme */}
      <style jsx>{`
        .extinguisher-service-page {
          font-family: 'Poppins', 'Segoe UI', sans-serif;
          background: var(--white);
        }

        .hero-section {
          position: relative;
          background: linear-gradient(135deg, var(--dark) 0%, var(--secondary) 100%);
          min-height: 400px;
          display: flex;
          align-items: center;
          color: var(--white);
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
          background-image: url('/assets/images/fire-extinguisher.webp');
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
          color: var(--primary-light);
          text-decoration: none;
          margin-bottom: 30px;
          font-weight: 500;
          transition: 0.3s;
        }

        .back-link-light:hover {
          color: var(--white);
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
          color: var(--gray-dark);
          text-align: center;
          max-width: 800px;
          margin: 0 auto 40px;
        }

        .main-image-wrapper {
          margin: 40px 0;
          border-radius: 24px;
          overflow: hidden;
          box-shadow: 0 20px 40px rgba(0,0,0,0.08);
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

        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 30px;
          margin: 60px 0;
        }

        .service-card {
          background: var(--white);
          padding: 30px;
          border-radius: 20px;
          box-shadow: var(--shadow);
          transition: 0.3s;
          text-align: center;
        }

        .service-card:hover {
          transform: translateY(-5px);
          box-shadow: var(--shadow-lg);
        }

        .service-icon {
          font-size: 2.5rem;
          color: var(--primary);
          margin-bottom: 20px;
        }

        .service-card h3 {
          font-size: 1.4rem;
          margin-bottom: 15px;
          color: var(--secondary);
        }

        .service-card p {
          color: var(--gray);
          line-height: 1.5;
        }

        .maintenance-steps {
          background: var(--white);
          padding: 50px;
          border-radius: 30px;
          margin: 60px 0;
          box-shadow: var(--shadow);
        }

        .maintenance-steps h2 {
          text-align: center;
          font-size: 2rem;
          color: var(--secondary);
          margin-bottom: 40px;
        }

        .steps-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 30px;
        }

        .step {
          text-align: center;
          padding: 20px;
        }

        .step-number {
          width: 50px;
          height: 50px;
          background: var(--primary);
          color: var(--white);
          font-size: 1.8rem;
          font-weight: bold;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 20px;
          box-shadow: 0 5px 10px rgba(0,0,0,0.1);
        }

        .step h3 {
          margin-bottom: 15px;
          color: var(--dark);
        }

        .step p {
          color: var(--gray);
          font-size: 0.95rem;
        }

        .specs-section {
          background: var(--white);
          border-radius: 24px;
          padding: 40px;
          margin: 50px 0;
          border: 1px solid var(--gray-light);
        }

        .specs-section h2 {
          text-align: center;
          margin-bottom: 30px;
          color: var(--secondary);
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
          border-bottom: 1px solid var(--gray-light);
        }

        .spec-label {
          font-weight: 600;
          color: var(--dark);
        }

        .spec-value {
          color: var(--primary);
          font-weight: 500;
          text-align: right;
        }

        .cta-section {
          background: linear-gradient(135deg, var(--secondary) 0%, var(--dark) 100%);
          border-radius: 24px;
          padding: 50px;
          text-align: center;
          margin: 60px 0 80px;
        }

        .cta-content h3 {
          font-size: 1.8rem;
          color: var(--white);
          margin-bottom: 15px;
        }

        .cta-content p {
          color: var(--gray-light);
          margin-bottom: 25px;
        }

        .btn-large {
          display: inline-block;
          background: var(--primary);
          color: var(--white);
          padding: 12px 32px;
          border-radius: 40px;
          text-decoration: none;
          font-weight: 600;
          transition: 0.3s;
        }

        .btn-large:hover {
          background: var(--primary-dark);
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
          .maintenance-steps { padding: 30px; }
          .specs-section { padding: 30px; }
          .maintenance-steps h2,
          .specs-section h2 {
            font-size: 1.5rem;
          }
        }
      `}</style>
    </>
  );
};

export default FireExtinguishersService;