import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  FaArrowLeft, FaCheckCircle, FaCertificate, FaClipboardList, 
  FaGlobe, FaShieldAlt, FaChartLine, FaFileAlt
} from 'react-icons/fa';

const CertificationTesting = () => {
  return (
    <>
      <Helmet>
        <title>Certification & Testing | FireSafe</title>
        <meta name="description" content="CE, UKCA, UL, FM testing and certification for fire protection equipment. Product testing to EN, BS, NFPA standards." />
      </Helmet>

      <div className="certification-service-page">
        {/* Hero Section with background image */}
        <div className="hero-section">
          <div className="hero-overlay"></div>
          <div className="container hero-content">
            <Link to="/services" className="back-link-light">
              <FaArrowLeft /> Back to Services
            </Link>
            <div className="hero-icon">
              <FaCertificate />
            </div>
            <h1>Certification & Testing</h1>
            <p>Global compliance made easy</p>
          </div>
        </div>

        <div className="container">
          {/* Introduction */}
          <div className="intro-section">
            <p className="lead-text">
              We assist manufacturers and suppliers in obtaining international certifications for fire safety products. 
              From initial gap analysis to final certification, we guide you through every step.
            </p>
          </div>

          {/* Main Image – using your provided image */}
          <div className="main-image-wrapper">
            <img 
              src="/assets/images/ma-frc-host-testing.jpg"
              alt="Fire equipment testing and certification"
              className="main-image"
            />
          </div>

          {/* Services Grid */}
          <div className="services-grid">
            <div className="service-card">
              <FaGlobe className="service-icon" />
              <h3>CE Marking (EU)</h3>
              <p>Full compliance with EU regulations (CPR, PED, etc.). Notified body coordination and technical file preparation.</p>
            </div>
            <div className="service-card">
              <FaShieldAlt className="service-icon" />
              <h3>UKCA Marking</h3>
              <p>UK conformity assessment for Great Britain. Guidance on UK designated standards and approval bodies.</p>
            </div>
            <div className="service-card">
              <FaCertificate className="service-icon" />
              <h3>UL / ULC Certification</h3>
              <p>North American market access. Testing to UL standards (UL 8, UL 10, UL 300, etc.) and follow‑up services.</p>
            </div>
            <div className="service-card">
              <FaClipboardList className="service-icon" />
              <h3>FM Approvals</h3>
              <p>Globally recognised FM approvals for fire protection equipment, including foam, sprinklers, and extinguishers.</p>
            </div>
            <div className="service-card">
              <FaChartLine className="service-icon" />
              <h3>ISO 9001 & 14001</h3>
              <p>Quality and environmental management system audits and certification support.</p>
            </div>
            <div className="service-card">
              <FaFileAlt className="service-icon" />
              <h3>Product Testing</h3>
              <p>Testing to EN, BS, NFPA, and ISO standards in accredited laboratories.</p>
            </div>
          </div>

          {/* Certification Process Steps */}
          <div className="process-section">
            <h2>How We Work</h2>
            <div className="process-steps">
              <div className="step">
                <div className="step-number">1</div>
                <h3>Gap Analysis</h3>
                <p>Review your product and identify required directives, standards, and testing.</p>
              </div>
              <div className="step">
                <div className="step-number">2</div>
                <h3>Technical File</h3>
                <p>Prepare technical documentation, risk assessment, and test plans.</p>
              </div>
              <div className="step">
                <div className="step-number">3</div>
                <h3>Testing & Reports</h3>
                <p>Coordinate with accredited labs, review results, and prepare certificates.</p>
              </div>
              <div className="step">
                <div className="step-number">4</div>
                <h3>Declaration & Marking</h3>
                <p>Issue DoC, affix CE/UKCA/UL/FM marks, and maintain ongoing compliance.</p>
              </div>
            </div>
          </div>

          {/* Standards & Directives Table */}
          <div className="standards-section">
            <h2>Key Standards & Directives</h2>
            <div className="standards-grid">
              <div className="standard-item">
                <span className="standard-label">EU Construction Products Regulation (CPR)</span>
                <span className="standard-value">EN 13565‑2, EN 3, EN 12094</span>
              </div>
              <div className="standard-item">
                <span className="standard-label">Pressure Equipment Directive (PED)</span>
                <span className="standard-value">2014/68/EU</span>
              </div>
              <div className="standard-item">
                <span className="standard-label">UL Standards</span>
                <span className="standard-value">UL 8 (Foam), UL 10 (Sprinklers), UL 300 (Kitchen)</span>
              </div>
              <div className="standard-item">
                <span className="standard-label">NFPA Codes</span>
                <span className="standard-value">NFPA 11, NFPA 2001, NFPA 750</span>
              </div>
              <div className="standard-item">
                <span className="standard-label">EN Standards</span>
                <span className="standard-value">EN 1568 (Foam), EN 615 (Powders), EN 12094 (Gas systems)</span>
              </div>
              <div className="standard-item">
                <span className="standard-label">ISO Management</span>
                <span className="standard-value">ISO 9001 (Quality), ISO 14001 (Environment)</span>
              </div>
            </div>
          </div>

          {/* Benefits / Why Choose Us */}
          <div className="benefits-section">
            <h2>Why Partner With Us?</h2>
            <div className="benefits-grid">
              <div className="benefit">
                <FaCheckCircle className="benefit-icon" />
                <span>Experienced in fire product regulations worldwide</span>
              </div>
              <div className="benefit">
                <FaCheckCircle className="benefit-icon" />
                <span>Relationships with multiple notified bodies and labs</span>
              </div>
              <div className="benefit">
                <FaCheckCircle className="benefit-icon" />
                <span>Fixed pricing and transparent timelines</span>
              </div>
              <div className="benefit">
                <FaCheckCircle className="benefit-icon" />
                <span>Post‑certification surveillance support</span>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="cta-section">
            <div className="cta-content">
              <h3>Ready to certify your product?</h3>
              <p>Talk to one of our compliance experts for a free initial consultation.</p>
              <Link to="/contact" className="btn btn-large">Talk to a Consultant →</Link>
            </div>
          </div>
        </div>
      </div>

      {/* Embedded CSS */}
      <style jsx>{`
        .certification-service-page {
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
          background-image: url('/assets/images/ma-frc-host-testing.jpg');
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

        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 30px;
          margin: 60px 0;
        }

        .service-card {
          background: white;
          padding: 30px;
          border-radius: 20px;
          box-shadow: 0 10px 20px rgba(0,0,0,0.05);
          transition: 0.3s;
          text-align: center;
        }

        .service-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 30px rgba(0,0,0,0.1);
        }

        .service-icon {
          font-size: 2.5rem;
          color: #e63946;
          margin-bottom: 20px;
        }

        .service-card h3 {
          font-size: 1.4rem;
          margin-bottom: 15px;
          color: #0a2b3e;
        }

        .service-card p {
          color: #475569;
          line-height: 1.5;
        }

        .process-section {
          background: white;
          padding: 50px;
          border-radius: 30px;
          margin: 60px 0;
          box-shadow: 0 8px 20px rgba(0,0,0,0.05);
        }

        .process-section h2 {
          text-align: center;
          font-size: 2rem;
          color: #0a2b3e;
          margin-bottom: 40px;
        }

        .process-steps {
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

        .standards-section {
          background: #ffffff;
          border-radius: 24px;
          padding: 40px;
          margin: 50px 0;
          border: 1px solid #e2e8f0;
        }

        .standards-section h2 {
          text-align: center;
          margin-bottom: 30px;
          color: #0a2b3e;
        }

        .standards-grid {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .standard-item {
          display: flex;
          justify-content: space-between;
          padding: 12px 0;
          border-bottom: 1px solid #e2e8f0;
          flex-wrap: wrap;
        }

        .standard-label {
          font-weight: 600;
          color: #1e293b;
          flex: 1;
        }

        .standard-value {
          color: #e63946;
          font-weight: 500;
          text-align: right;
          flex: 1;
        }

        .benefits-section {
          background: #ffffff;
          border-radius: 24px;
          padding: 40px;
          margin: 50px 0;
          border: 1px solid #e2e8f0;
        }

        .benefits-section h2 {
          text-align: center;
          margin-bottom: 30px;
          color: #0a2b3e;
        }

        .benefits-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 20px;
        }

        .benefit {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 10px;
          background: #f8fafc;
          border-radius: 12px;
        }

        .benefit-icon {
          color: #e63946;
          font-size: 1.2rem;
          flex-shrink: 0;
        }

        .benefit span {
          color: #1e293b;
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

        @media (max-width: 992px) {
          .standard-item {
            flex-direction: column;
            gap: 5px;
          }
          .standard-value {
            text-align: left;
          }
        }

        @media (max-width: 768px) {
          .hero-content h1 { font-size: 2rem; }
          .hero-content p { font-size: 1rem; }
          .process-section { padding: 30px; }
          .standards-section { padding: 30px; }
          .process-section h2,
          .standards-section h2,
          .benefits-section h2 {
            font-size: 1.5rem;
          }
        }
      `}</style>
    </>
  );
};

export default CertificationTesting;