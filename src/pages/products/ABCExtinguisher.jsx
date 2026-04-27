import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  FaArrowLeft, FaCheckCircle, FaEnvelope, FaPhoneAlt, FaIndustry, FaFire, 
  FaChartLine, FaWeightHanging, FaTachometerAlt, FaThermometerHalf, FaShieldAlt, 
  FaFileDownload, FaStar, FaBoxes, FaCalendarAlt, FaRuler, FaGasPump 
} from 'react-icons/fa';

const ABCExtinguisher = () => {
  const [activeTab, setActiveTab] = useState('specs');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 300);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const specs = [
    { icon: <FaWeightHanging />, label: 'Capacity', value: '9 kg' },
    { icon: <FaTachometerAlt />, label: 'Working Pressure', value: '14 bar' },
    { icon: <FaChartLine />, label: 'Discharge Time', value: '14 seconds' },
    { icon: <FaRuler />, label: 'Range', value: '4-6 meters' },
    { icon: <FaThermometerHalf />, label: 'Temperature Range', value: '-30°C to +60°C' },
    { icon: <FaCalendarAlt />, label: 'Warranty', value: '5 years' }
  ];

  const features = [
    'Class A, B, C fires – most versatile extinguisher',
    'CE Certified & BS EN3 compliant',
    'Corrosion-resistant powder coating',
    'Easy-to-read pressure gauge',
    'Includes wall mounting bracket',
    'Non-toxic dry powder agent',
    '5-year manufacturer warranty'
  ];

  const applications = [
    'Offices & Commercial Buildings', 'Factories & Industrial Plants',
    'Warehouses & Storage Facilities', 'Schools & Educational Institutions',
    'Hotels & Hospitality', 'Homes & Residential',
    'Vehicles & Fleet', 'Construction Sites'
  ];

  const certifications = ['CE Marked', 'BS EN3', 'ISO 9001:2015', 'MED Approved', 'EN 3 Certified'];

  return (
    <>
      <Helmet>
        <title>ABC Dry Powder Fire Extinguisher | FireSafe</title>
        <meta name="description" content="9kg ABC dry powder fire extinguisher for Class A, B, C fires. CE certified, 5-year warranty. Ideal for homes, offices, and industrial facilities." />
      </Helmet>

      <div className="product-page-enhanced">
        {/* Sticky CTA */}
        <div className={`sticky-cta ${scrolled ? 'visible' : ''}`}>
          <div className="container">
            <div className="sticky-content">
              <span className="sticky-title">ABC Dry Powder Extinguisher – 9kg</span>
              <div className="sticky-buttons">
                <Link to="/contact" className="btn-sm-primary"><FaEnvelope /> Get Quote</Link>
                <a href="tel:+97141234567" className="btn-sm-outline"><FaPhoneAlt /> Call Now</a>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          {/* Back link */}
          <Link to="/products" className="back-link-enhanced">
            <FaArrowLeft /> Back to Products
          </Link>

          {/* Product Hero Section */}
          <div className="product-hero">
            <div className="hero-badge">🔥 Best Seller</div>
            <div className="hero-content">
              <h1>ABC Dry Powder Fire Extinguisher</h1>
              <p className="hero-subtitle">Multi-purpose protection for Class A, B & C fires</p>
              <div className="hero-rating">
                <span className="stars">★★★★★</span>
                <span className="rating-count">(127 verified reviews)</span>
              </div>
            </div>
          </div>

          {/* Main Grid: Image + Info */}
          <div className="product-main-grid">
            {/* Image Gallery */}
            <div className="image-gallery">
              <div className="main-image">
                <img 
                  src="/assets/images/abc-dry-chemical-powder-fire-extinguisher-1000x1000.jpg" 
                  alt="ABC Dry Powder Fire Extinguisher"
                />
              </div>
              <div className="thumbnails">
                <div className="thumb active">
                  <img src="/assets/images/abc-dry-chemical-powder-fire-extinguisher-1000x1000.jpg" alt="Main" />
                </div>
                <div className="thumb">
                  <div className="thumb-placeholder">+</div>
                </div>
              </div>
            </div>

            {/* Product Info Card */}
            <div className="product-info-card">
              <div className="price-tag">
                <span className="price-label">Price:</span>
                <span className="price-value">Contact for pricing</span>
                <span className="price-note">*Volume discounts available</span>
              </div>

              <div className="specs-highlight">
                {specs.slice(0, 3).map((spec, idx) => (
                  <div className="spec-chip" key={idx}>
                    {spec.icon}
                    <span>{spec.label}: <strong>{spec.value}</strong></span>
                  </div>
                ))}
              </div>

              <p className="product-description">
                The ABC Dry Powder Fire Extinguisher is the most versatile extinguisher, capable of tackling 
                Class A (combustible materials), Class B (flammable liquids), and Class C (flammable gases) fires. 
                Ideal for homes, offices, and industrial facilities. Comes with a 5-year warranty and CE certification.
              </p>

              <div className="action-buttons">
                <Link to="/contact" className="btn-primary-large">
                  <FaEnvelope /> Request a Quote
                </Link>
                <a href="tel:+97141234567" className="btn-outline-large">
                  <FaPhoneAlt /> Call Expert
                </a>
                <button className="btn-datasheet">
                  <FaFileDownload /> Datasheet
                </button>
              </div>

              <div className="trust-badges">
                <span><FaShieldAlt /> CE Certified</span>
                <span><FaShieldAlt /> 5 Year Warranty</span>
                <span><FaShieldAlt /> Free Shipping*</span>
              </div>
            </div>
          </div>

          {/* Tabs Section */}
          <div className="tabs-section">
            <div className="tabs-header">
              <button className={`tab-btn ${activeTab === 'specs' ? 'active' : ''}`} onClick={() => setActiveTab('specs')}>
                Technical Specs
              </button>
              <button className={`tab-btn ${activeTab === 'features' ? 'active' : ''}`} onClick={() => setActiveTab('features')}>
                Features
              </button>
              <button className={`tab-btn ${activeTab === 'applications' ? 'active' : ''}`} onClick={() => setActiveTab('applications')}>
                Applications
              </button>
              <button className={`tab-btn ${activeTab === 'certs' ? 'active' : ''}`} onClick={() => setActiveTab('certs')}>
                Certifications
              </button>
            </div>

            <div className="tab-content">
              {activeTab === 'specs' && (
                <div className="specs-grid-full">
                  {specs.map((spec, idx) => (
                    <div className="spec-item-full" key={idx}>
                      <div className="spec-icon">{spec.icon}</div>
                      <div className="spec-info">
                        <span className="spec-label">{spec.label}</span>
                        <span className="spec-value">{spec.value}</span>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {activeTab === 'features' && (
                <ul className="feature-list-full">
                  {features.map((feature, idx) => (
                    <li key={idx}><FaCheckCircle className="check-icon" /> {feature}</li>
                  ))}
                </ul>
              )}

              {activeTab === 'applications' && (
                <div className="applications-grid-full">
                  {applications.map((app, idx) => (
                    <div className="app-chip" key={idx}>
                      <FaIndustry /> {app}
                    </div>
                  ))}
                </div>
              )}

              {activeTab === 'certs' && (
                <div className="certs-grid-full">
                  {certifications.map((cert, idx) => (
                    <div className="cert-chip" key={idx}>
                      <FaShieldAlt /> {cert}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Maintenance Tips Section */}
          <div className="maintenance-section-enhanced">
            <h3>📋 Maintenance & Usage Guidelines</h3>
            <div className="maintenance-grid">
              <div className="maintenance-item">
                <div className="m-icon">✔️</div>
                <p>Inspect monthly – ensure pressure gauge is in green zone</p>
              </div>
              <div className="maintenance-item">
                <div className="m-icon">✔️</div>
                <p>Check for physical damage, corrosion, or leakage</p>
              </div>
              <div className="maintenance-item">
                <div className="m-icon">✔️</div>
                <p>Have professionally serviced annually</p>
              </div>
              <div className="maintenance-item">
                <div className="m-icon">✔️</div>
                <p>Replace every 5-10 years or after any use</p>
              </div>
              <div className="maintenance-item">
                <div className="m-icon">✔️</div>
                <p>Train staff on PASS technique (Pull, Aim, Squeeze, Sweep)</p>
              </div>
            </div>
          </div>

          {/* Related Products */}
          <div className="related-products">
            <h3>You May Also Like</h3>
            <div className="related-grid">
              <Link to="/products/co2-extinguisher" className="related-card">
                <img src="/assets/images/co2-extinguisher-placeholder.jpg" alt="CO2 Extinguisher" />
                <span>CO₂ Extinguisher</span>
              </Link>
              <Link to="/products/wet-chemical-extinguisher" className="related-card">
                <img src="/assets/images/wet-chemical-placeholder.jpg" alt="Wet Chemical" />
                <span>Wet Chemical Extinguisher</span>
              </Link>
              <Link to="/products/foam-extinguisher" className="related-card">
                <img src="/assets/images/foam-extinguisher-placeholder.jpg" alt="Foam Extinguisher" />
                <span>Foam Extinguisher</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Embedded CSS – Green & White Theme */}
      <style jsx>{`
        .product-page-enhanced {
          font-family: 'Inter', 'Poppins', sans-serif;
          background: var(--white);
          padding: 40px 0 80px;
        }

        .container {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 24px;
        }

        /* Back link */
        .back-link-enhanced {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: var(--secondary);
          text-decoration: none;
          font-weight: 500;
          margin-bottom: 32px;
          transition: 0.2s;
        }
        .back-link-enhanced:hover {
          color: var(--primary);
          transform: translateX(-4px);
        }

        /* Hero */
        .product-hero {
          margin-bottom: 40px;
          position: relative;
        }
        .hero-badge {
          background: var(--primary);
          color: var(--white);
          display: inline-block;
          padding: 6px 16px;
          border-radius: 30px;
          font-size: 0.85rem;
          font-weight: 600;
          margin-bottom: 16px;
        }
        .hero-content h1 {
          font-size: 2.8rem;
          font-weight: 700;
          color: var(--secondary);
          margin-bottom: 12px;
        }
        .hero-subtitle {
          font-size: 1.2rem;
          color: var(--gray);
          margin-bottom: 12px;
        }
        .hero-rating {
          display: flex;
          align-items: center;
          gap: 12px;
          flex-wrap: wrap;
        }
        .stars {
          color: #fbbf24;
          font-size: 1.2rem;
          letter-spacing: 2px;
        }
        .rating-count {
          color: var(--gray);
          font-size: 0.9rem;
        }

        /* Main Grid */
        .product-main-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 48px;
          margin-bottom: 60px;
        }
        @media (max-width: 992px) {
          .product-main-grid {
            grid-template-columns: 1fr;
            gap: 32px;
          }
        }

        /* Image Gallery */
        .image-gallery {
          background: var(--white);
          border-radius: 24px;
          box-shadow: 0 20px 35px -10px rgba(0,0,0,0.08);
          overflow: hidden;
          padding: 20px;
        }
        .main-image img {
          width: 100%;
          height: auto;
          border-radius: 16px;
          object-fit: cover;
        }
        .thumbnails {
          display: flex;
          gap: 12px;
          margin-top: 20px;
          justify-content: center;
        }
        .thumb {
          width: 80px;
          height: 80px;
          border-radius: 12px;
          overflow: hidden;
          cursor: pointer;
          border: 2px solid transparent;
          transition: 0.2s;
        }
        .thumb.active {
          border-color: var(--primary);
        }
        .thumb img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .thumb-placeholder {
          width: 100%;
          height: 100%;
          background: var(--light-gray);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 2rem;
          color: var(--gray);
        }

        /* Info Card */
        .product-info-card {
          background: var(--white);
          border-radius: 24px;
          padding: 32px;
          box-shadow: 0 20px 35px -10px rgba(0,0,0,0.08);
        }
        .price-tag {
          margin-bottom: 24px;
          padding-bottom: 16px;
          border-bottom: 2px solid var(--gray-light);
        }
        .price-label {
          font-size: 0.9rem;
          color: var(--gray);
          text-transform: uppercase;
          letter-spacing: 1px;
        }
        .price-value {
          font-size: 1.8rem;
          font-weight: 700;
          color: var(--primary);
          display: block;
          margin: 8px 0 4px;
        }
        .price-note {
          font-size: 0.8rem;
          color: var(--gray);
        }
        .specs-highlight {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
          margin-bottom: 24px;
        }
        .spec-chip {
          background: var(--light-gray);
          padding: 8px 14px;
          border-radius: 40px;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 0.85rem;
        }
        .spec-chip svg {
          color: var(--primary);
        }
        .product-description {
          color: var(--gray-dark);
          line-height: 1.6;
          margin-bottom: 28px;
        }
        .action-buttons {
          display: flex;
          gap: 16px;
          flex-wrap: wrap;
          margin-bottom: 24px;
        }
        .btn-primary-large, .btn-outline-large, .btn-datasheet {
          padding: 12px 24px;
          border-radius: 40px;
          font-weight: 600;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 10px;
          transition: 0.2s;
          cursor: pointer;
          border: none;
          font-size: 0.95rem;
        }
        .btn-primary-large {
          background: var(--primary);
          color: var(--white);
        }
        .btn-primary-large:hover {
          background: var(--primary-dark);
          transform: translateY(-2px);
        }
        .btn-outline-large {
          border: 2px solid var(--primary);
          background: transparent;
          color: var(--primary);
        }
        .btn-outline-large:hover {
          background: var(--primary);
          color: var(--white);
        }
        .btn-datasheet {
          background: var(--light-gray);
          color: var(--dark);
        }
        .btn-datasheet:hover {
          background: var(--gray-light);
        }
        .trust-badges {
          display: flex;
          gap: 20px;
          flex-wrap: wrap;
          font-size: 0.85rem;
          color: var(--gray);
        }
        .trust-badges span {
          display: inline-flex;
          align-items: center;
          gap: 6px;
        }

        /* Tabs */
        .tabs-section {
          background: var(--white);
          border-radius: 24px;
          box-shadow: 0 10px 25px -5px rgba(0,0,0,0.05);
          margin: 48px 0;
          overflow: hidden;
        }
        .tabs-header {
          display: flex;
          gap: 8px;
          background: var(--light-gray);
          padding: 16px 24px 0;
          border-bottom: 1px solid var(--gray-light);
        }
        .tab-btn {
          background: none;
          border: none;
          padding: 12px 24px;
          font-size: 1rem;
          font-weight: 600;
          color: var(--gray);
          cursor: pointer;
          transition: 0.2s;
          border-bottom: 3px solid transparent;
        }
        .tab-btn.active {
          color: var(--primary);
          border-bottom-color: var(--primary);
        }
        .tab-content {
          padding: 32px;
        }
        .specs-grid-full {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 24px;
        }
        .spec-item-full {
          display: flex;
          align-items: center;
          gap: 16px;
          background: var(--light-gray);
          padding: 16px;
          border-radius: 16px;
        }
        .spec-icon {
          font-size: 1.8rem;
          color: var(--primary);
        }
        .spec-info {
          display: flex;
          flex-direction: column;
        }
        .spec-label {
          font-size: 0.8rem;
          color: var(--gray);
          text-transform: uppercase;
        }
        .spec-value {
          font-size: 1.2rem;
          font-weight: 700;
          color: var(--secondary);
        }
        .feature-list-full {
          list-style: none;
          padding: 0;
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 16px;
        }
        .feature-list-full li {
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .check-icon {
          color: var(--primary);
          font-size: 1.2rem;
        }
        .applications-grid-full, .certs-grid-full {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
        }
        .app-chip, .cert-chip {
          background: var(--light-gray);
          padding: 8px 20px;
          border-radius: 40px;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 0.9rem;
        }

        /* Maintenance */
        .maintenance-section-enhanced {
          background: var(--primary-lightest);
          border-left: 5px solid var(--primary);
          padding: 32px;
          border-radius: 20px;
          margin: 48px 0;
        }
        .maintenance-section-enhanced h3 {
          font-size: 1.5rem;
          margin-bottom: 24px;
          color: var(--secondary);
        }
        .maintenance-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
          gap: 16px;
        }
        .maintenance-item {
          display: flex;
          align-items: center;
          gap: 12px;
          background: var(--white);
          padding: 12px 16px;
          border-radius: 12px;
        }
        .m-icon {
          font-size: 1.2rem;
        }

        /* Related Products */
        .related-products {
          margin-top: 60px;
        }
        .related-products h3 {
          font-size: 1.5rem;
          margin-bottom: 24px;
          color: var(--secondary);
        }
        .related-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
          gap: 20px;
        }
        .related-card {
          background: var(--white);
          border-radius: 16px;
          padding: 16px;
          text-align: center;
          text-decoration: none;
          color: var(--secondary);
          transition: 0.2s;
          box-shadow: 0 2px 8px rgba(0,0,0,0.05);
        }
        .related-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 10px 20px rgba(0,0,0,0.1);
        }
        .related-card img {
          width: 100%;
          height: 120px;
          object-fit: cover;
          border-radius: 12px;
          margin-bottom: 12px;
          background: var(--light-gray);
        }

        /* Sticky CTA */
        .sticky-cta {
          position: fixed;
          bottom: 0;
          left: 0;
          width: 100%;
          background: var(--white);
          box-shadow: 0 -5px 20px rgba(0,0,0,0.08);
          transform: translateY(100%);
          transition: transform 0.3s;
          z-index: 1000;
        }
        .sticky-cta.visible {
          transform: translateY(0);
        }
        .sticky-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 12px 0;
          flex-wrap: wrap;
          gap: 16px;
        }
        .sticky-title {
          font-weight: 600;
          color: var(--secondary);
        }
        .sticky-buttons {
          display: flex;
          gap: 12px;
        }
        .btn-sm-primary, .btn-sm-outline {
          padding: 8px 20px;
          border-radius: 40px;
          text-decoration: none;
          font-size: 0.9rem;
          font-weight: 500;
          display: inline-flex;
          align-items: center;
          gap: 8px;
        }
        .btn-sm-primary {
          background: var(--primary);
          color: var(--white);
        }
        .btn-sm-outline {
          border: 1px solid var(--primary);
          color: var(--primary);
          background: transparent;
        }
        @media (max-width: 768px) {
          .hero-content h1 { font-size: 1.8rem; }
          .product-info-card { padding: 20px; }
          .tabs-header { overflow-x: auto; }
          .tab-btn { padding: 8px 16px; font-size: 0.85rem; }
          .sticky-title { font-size: 0.8rem; }
        }
      `}</style>
    </>
  );
};

export default ABCExtinguisher;