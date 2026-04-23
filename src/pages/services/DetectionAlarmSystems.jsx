import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { FaArrowLeft, FaCheckCircle, FaBell, FaChartLine, FaShieldAlt, FaUsers, FaWrench, FaPlug, FaMobileAlt } from 'react-icons/fa';

const DetectionAlarmSystems = () => {
  return (
    <>
      <Helmet>
        <title>Detection & Alarm Systems | FireSafe</title>
        <meta name="description" content="Advanced smoke, heat, and flame detection with voice evacuation and BMS integration. Protect lives and assets with FireSafe." />
      </Helmet>

      <div className="detection-service-page">
        {/* Hero Section with Background Image */}
        <div className="hero-section">
          <div className="hero-overlay"></div>
          <div className="container hero-content">
            <Link to="/services" className="back-link-light">
              <FaArrowLeft /> Back to Services
            </Link>
            <div className="hero-icon">
              <FaBell />
            </div>
            <h1>Detection & Alarm Systems</h1>
            <p>Early warning saves lives – advanced technology for instant response</p>
          </div>
        </div>

        <div className="container">
          {/* Introduction */}
          <div className="intro-section">
            <p className="lead-text">
              Our detection systems provide instant alerts, giving you precious time to evacuate and respond. 
              Designed for reliability, scalability, and integration with modern building management systems.
            </p>
          </div>

          {/* Main Image - from public folder */}
          <div className="main-image-wrapper">
            <img 
              src="/assets/images/josephina-kolpachnikof-prs-dGcH7K0-unsplash.jpg" 
              alt="Fire detection control panel"
              className="main-image"
            />
          </div>

          {/* Features Grid */}
          <div className="features-grid">
            <div className="feature-card">
              <FaCheckCircle className="feature-icon" />
              <h3>Smoke Detectors</h3>
              <p>Ionization & photoelectric sensors for fast smoke detection in all environments.</p>
            </div>
            <div className="feature-card">
              <FaCheckCircle className="feature-icon" />
              <h3>Heat & Flame Sensors</h3>
              <p>Rate-of-rise and fixed temperature sensors, plus UV/IR flame detectors.</p>
            </div>
            <div className="feature-card">
              <FaCheckCircle className="feature-icon" />
              <h3>Addressable Panels</h3>
              <p>Pinpoint exact location of alarm for faster response and reduced false alarms.</p>
            </div>
            <div className="feature-card">
              <FaCheckCircle className="feature-icon" />
              <h3>Voice Evacuation</h3>
              <p>Clear, intelligible voice instructions to guide occupants during emergencies.</p>
            </div>
            <div className="feature-card">
              <FaCheckCircle className="feature-icon" />
              <h3>BMS Integration</h3>
              <p>Seamless connection with building management systems for automated responses.</p>
            </div>
            <div className="feature-card">
              <FaCheckCircle className="feature-icon" />
              <h3>Remote Monitoring</h3>
              <p>24/7 cloud-based monitoring and instant alerts to your phone or control room.</p>
            </div>
          </div>

          {/* How to Use / Best Practices */}
          <div className="usage-section">
            <h2>How to Use & Maintain Your System</h2>
            <div className="usage-steps">
              <div className="step">
                <div className="step-number">1</div>
                <h3>Installation by Certified Technicians</h3>
                <p>We design and install the system according to NFPA 72 and local codes. All devices are placed strategically for optimal coverage.</p>
              </div>
              <div className="step">
                <div className="step-number">2</div>
                <h3>Monthly Visual Inspection</h3>
                <p>Check control panel for fault LEDs, ensure no obstructions near detectors, and test a sample of devices using the panel's test mode.</p>
              </div>
              <div className="step">
                <div className="step-number">3</div>
                <h3>Annual Professional Testing</h3>
                <p>Certified engineers will test every detector, verify battery backup, clean sensors, and update firmware if needed.</p>
              </div>
              <div className="step">
                <div className="step-number">4</div>
                <h3>Immediate Action on Alarm</h3>
                <p>Never ignore an alarm. Evacuate immediately following your emergency plan. Do not reset the panel until the cause is investigated.</p>
              </div>
              <div className="step">
                <div className="step-number">5</div>
                <h3>Record Keeping</h3>
                <p>Maintain a log of all tests, faults, and maintenance actions. This is required for insurance and regulatory compliance.</p>
              </div>
            </div>
          </div>

          {/* Technical Specifications Table */}
          <div className="specs-section">
            <h2>Technical Specifications</h2>
            <div className="specs-grid">
              <div className="spec-item">
                <span className="spec-label">System Types</span>
                <span className="spec-value">Conventional, Addressable, Wireless</span>
              </div>
              <div className="spec-item">
                <span className="spec-label">Detection Range</span>
                <span className="spec-value">Up to 100m² per smoke detector</span>
              </div>
              <div className="spec-item">
                <span className="spec-label">Power Supply</span>
                <span className="spec-value">230V AC with 24h battery backup</span>
              </div>
              <div className="spec-item">
                <span className="spec-label">Communication</span>
                <span className="spec-value">RS485, Ethernet, GSM, Wi‑Fi</span>
              </div>
              <div className="spec-item">
                <span className="spec-label">Certifications</span>
                <span className="spec-value">EN 54, UL, NFPA 72, CE</span>
              </div>
              <div className="spec-item">
                <span className="spec-label">Operating Temp</span>
                <span className="spec-value">-10°C to +50°C</span>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="cta-section">
            <div className="cta-content">
              <h3>Need a custom solution for your facility?</h3>
              <p>Our experts will design a system tailored to your building layout and risk profile.</p>
              <Link to="/contact" className="btn btn-large">Get a Free Consultation →</Link>
            </div>
          </div>
        </div>
      </div>

      {/* Embedded CSS */}
      <style jsx>{`
        .detection-service-page {
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
          background-image: url('/assets/images/josephina-kolpachnikof-prs-dGcH7K0-unsplash.jpg');
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

        .usage-section {
          background: white;
          padding: 50px;
          border-radius: 30px;
          margin: 60px 0;
          box-shadow: 0 8px 20px rgba(0,0,0,0.05);
        }

        .usage-section h2 {
          text-align: center;
          font-size: 2rem;
          color: #0a2b3e;
          margin-bottom: 40px;
        }

        .usage-steps {
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
          background: #e63946;
          color: white;
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
          color: #1e293b;
        }

        .step p {
          color: #475569;
          font-size: 0.95rem;
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
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
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

        @media (max-width: 768px) {
          .hero-content h1 { font-size: 2rem; }
          .hero-content p { font-size: 1rem; }
          .usage-section { padding: 30px; }
          .specs-grid { grid-template-columns: 1fr; }
          .spec-item { flex-direction: column; gap: 5px; }
        }
      `}</style>
    </>
  );
};

export default DetectionAlarmSystems;