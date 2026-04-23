import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  FaArrowLeft, FaCheckCircle, FaEnvelope, FaPhoneAlt, FaIndustry, 
  FaBoxes, FaRuler, FaTachometerAlt, FaThermometerHalf, FaCalendarAlt, 
  FaFlask, FaShieldAlt, FaFileDownload
} from 'react-icons/fa';

const ABCPowder = () => {
  const [activeTab, setActiveTab] = useState('specs');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 300);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const specs = [
    { icon: <FaRuler />, label: 'Particle Size', value: '< 75 microns' },
    { icon: <FaBoxes />, label: 'Bulk Density', value: '1.1 kg/L' },
    { icon: <FaFlask />, label: 'Moisture Content', value: '< 1%' },
    { icon: <FaCalendarAlt />, label: 'Shelf Life', value: '5 years' },
    { icon: <FaTachometerAlt />, label: 'Flow Rate', value: 'High flow' },
    { icon: <FaThermometerHalf />, label: 'Storage Temp', value: '-20°C to +50°C' }
  ];

  const features = [
    'Class A, B, C fires – multi-purpose agent',
    'High flow rate for fast extinguishment',
    'Non-toxic and environmentally safe',
    'Moisture-resistant packaging',
    'Free-flowing – no caking',
    'Compatible with ABC extinguishers',
    'Yellow colour for easy identification'
  ];

  const applications = [
    'Industrial Facilities', 'Vehicles & Fleet',
    'Paint Shops & Spray Booths', 'Storage Areas',
    'Construction Sites', 'Workshops',
    'Commercial Kitchens (Class B)', 'Gas Stations'
  ];

  const certifications = ['UL Listed', 'ISO 9001:2015', 'EN 615 Certified', 'CE Marked', 'BS EN3 Compliant'];

  return (
    <>
      <Helmet>
        <title>ABC Dry Chemical Powder | FireSafe</title>
        <meta name="description" content="Multi-purpose dry chemical powder for class A, B, C fires. Free-flowing, moisture-resistant, 5-year shelf life. UL and EN certified." />
      </Helmet>

      <div className="product-page-enhanced">
        {/* Sticky CTA */}
        <div className={`sticky-cta ${scrolled ? 'visible' : ''}`}>
          <div className="container">
            <div className="sticky-content">
              <span className="sticky-title">ABC Dry Chemical Powder – 5 year shelf life</span>
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
            <div className="hero-badge">🔥 High Performance</div>
            <div className="hero-content">
              <h1>ABC Dry Chemical Powder</h1>
              <p className="hero-subtitle">Versatile extinguishing agent for Class A, B & C fires</p>
              <div className="hero-rating">
                <span className="stars">★★★★★</span>
                <span className="rating-count">(92 verified reviews)</span>
              </div>
            </div>
          </div>

          {/* Main Grid: Image + Info */}
          <div className="product-main-grid">
            {/* Image Gallery */}
            <div className="image-gallery">
              <div className="main-image">
                <img 
                  src="/assets/images/abc-powder-fire-extinguisher-01_1.jpg" 
                  alt="ABC Dry Chemical Powder"
                />
              </div>
              <div className="thumbnails">
                <div className="thumb active">
                  <img src="/assets/images/abc-powder-fire-extinguisher-01_1.jpg" alt="Main" />
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
                ABC dry chemical powder is a high-performance extinguishing agent suitable for Class A (ordinary combustibles), 
                Class B (flammable liquids), and Class C (flammable gases). Free-flowing, moisture-resistant, and designed 
                for rapid fire knockdown. Ideal for industrial, commercial, and vehicle applications.
              </p>

              <div className="action-buttons">
                <Link to="/contact" className="btn-primary-large">
                  <FaEnvelope /> Request a Quote
                </Link>
                <a href="tel:+97141234567" className="btn-outline-large">
                  <FaPhoneAlt /> Call Expert
                </a>
                <button className="btn-datasheet" onClick={() => alert('Datasheet download coming soon')}>
                  <FaFileDownload /> Datasheet
                </button>
              </div>

              <div className="trust-badges">
                <span><FaShieldAlt /> UL Listed</span>
                <span><FaShieldAlt /> EN 615</span>
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

          {/* Handling & Storage Section */}
          <div className="maintenance-section-enhanced">
            <h3>📦 Handling & Storage Guidelines</h3>
            <div className="maintenance-grid">
              <div className="maintenance-item">
                <div className="m-icon">✔️</div>
                <p>Store in dry area to prevent caking</p>
              </div>
              <div className="maintenance-item">
                <div className="m-icon">✔️</div>
                <p>Keep containers sealed when not in use</p>
              </div>
              <div className="maintenance-item">
                <div className="m-icon">✔️</div>
                <p>Use within 5 years of manufacture</p>
              </div>
              <div className="maintenance-item">
                <div className="m-icon">✔️</div>
                <p>Dispose of unused powder according to local regulations</p>
              </div>
              <div className="maintenance-item">
                <div className="m-icon">✔️</div>
                <p>Avoid contamination with other powder types</p>
              </div>
            </div>
          </div>

          {/* Related Products */}
          <div className="related-products">
            <h3>You May Also Like</h3>
            <div className="related-grid">
              <Link to="/products/bc-powder" className="related-card">
                <div className="related-placeholder">🔥</div>
                <span>BC Dry Powder</span>
              </Link>
              <Link to="/products/purple-k" className="related-card">
                <div className="related-placeholder">💜</div>
                <span>Purple K Powder</span>
              </Link>
              <Link to="/products/abc-extinguisher" className="related-card">
                <div className="related-placeholder">🧯</div>
                <span>ABC Extinguisher</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Embedded CSS */}
      <style jsx>{`
        .product-page-enhanced {
          font-family: 'Inter', 'Poppins', sans-serif;
          background: linear-gradient(135deg, #f8fafc 0%, #ffffff 100%);
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
          color: #1e40af;
          text-decoration: none;
          font-weight: 500;
          margin-bottom: 32px;
          transition: 0.2s;
        }
        .back-link-enhanced:hover {
          color: #dc2626;
          transform: translateX(-4px);
        }

        /* Hero */
        .product-hero {
          margin-bottom: 40px;
          position: relative;
        }
        .hero-badge {
          background: #dc2626;
          color: white;
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
          color: #0f172a;
          margin-bottom: 12px;
        }
        .hero-subtitle {
          font-size: 1.2rem;
          color: #475569;
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
          color: #64748b;
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
          background: #ffffff;
          border-radius: 24px;
          box-shadow: 0 20px 35px -10px rgba(0,0,0,0.1);
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
          border-color: #dc2626;
        }
        .thumb img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .thumb-placeholder {
          width: 100%;
          height: 100%;
          background: #e2e8f0;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 2rem;
          color: #94a3b8;
        }

        /* Info Card */
        .product-info-card {
          background: white;
          border-radius: 24px;
          padding: 32px;
          box-shadow: 0 20px 35px -10px rgba(0,0,0,0.1);
        }
        .price-tag {
          margin-bottom: 24px;
          padding-bottom: 16px;
          border-bottom: 2px solid #e2e8f0;
        }
        .price-label {
          font-size: 0.9rem;
          color: #64748b;
          text-transform: uppercase;
          letter-spacing: 1px;
        }
        .price-value {
          font-size: 1.8rem;
          font-weight: 700;
          color: #dc2626;
          display: block;
          margin: 8px 0 4px;
        }
        .price-note {
          font-size: 0.8rem;
          color: #64748b;
        }
        .specs-highlight {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
          margin-bottom: 24px;
        }
        .spec-chip {
          background: #f1f5f9;
          padding: 8px 14px;
          border-radius: 40px;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 0.85rem;
        }
        .spec-chip svg {
          color: #dc2626;
        }
        .product-description {
          color: #334155;
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
          background: #dc2626;
          color: white;
        }
        .btn-primary-large:hover {
          background: #b91c1c;
          transform: translateY(-2px);
        }
        .btn-outline-large {
          border: 2px solid #dc2626;
          background: transparent;
          color: #dc2626;
        }
        .btn-outline-large:hover {
          background: #dc2626;
          color: white;
        }
        .btn-datasheet {
          background: #f1f5f9;
          color: #1e293b;
        }
        .btn-datasheet:hover {
          background: #e2e8f0;
        }
        .trust-badges {
          display: flex;
          gap: 20px;
          flex-wrap: wrap;
          font-size: 0.85rem;
          color: #475569;
        }
        .trust-badges span {
          display: inline-flex;
          align-items: center;
          gap: 6px;
        }

        /* Tabs */
        .tabs-section {
          background: white;
          border-radius: 24px;
          box-shadow: 0 10px 25px -5px rgba(0,0,0,0.05);
          margin: 48px 0;
          overflow: hidden;
        }
        .tabs-header {
          display: flex;
          gap: 8px;
          background: #f8fafc;
          padding: 16px 24px 0;
          border-bottom: 1px solid #e2e8f0;
        }
        .tab-btn {
          background: none;
          border: none;
          padding: 12px 24px;
          font-size: 1rem;
          font-weight: 600;
          color: #64748b;
          cursor: pointer;
          transition: 0.2s;
          border-bottom: 3px solid transparent;
        }
        .tab-btn.active {
          color: #dc2626;
          border-bottom-color: #dc2626;
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
          background: #f8fafc;
          padding: 16px;
          border-radius: 16px;
        }
        .spec-icon {
          font-size: 1.8rem;
          color: #dc2626;
        }
        .spec-info {
          display: flex;
          flex-direction: column;
        }
        .spec-label {
          font-size: 0.8rem;
          color: #64748b;
          text-transform: uppercase;
        }
        .spec-value {
          font-size: 1.2rem;
          font-weight: 700;
          color: #0f172a;
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
          color: #10b981;
          font-size: 1.2rem;
        }
        .applications-grid-full, .certs-grid-full {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
        }
        .app-chip, .cert-chip {
          background: #f1f5f9;
          padding: 8px 20px;
          border-radius: 40px;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 0.9rem;
        }

        /* Maintenance */
        .maintenance-section-enhanced {
          background: #fefce8;
          border-left: 5px solid #eab308;
          padding: 32px;
          border-radius: 20px;
          margin: 48px 0;
        }
        .maintenance-section-enhanced h3 {
          font-size: 1.5rem;
          margin-bottom: 24px;
          color: #854d0e;
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
          background: white;
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
        }
        .related-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
          gap: 20px;
        }
        .related-card {
          background: white;
          border-radius: 16px;
          padding: 16px;
          text-align: center;
          text-decoration: none;
          color: #1e293b;
          transition: 0.2s;
          box-shadow: 0 2px 8px rgba(0,0,0,0.05);
        }
        .related-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 10px 20px rgba(0,0,0,0.1);
        }
        .related-placeholder {
          font-size: 3rem;
          margin-bottom: 12px;
        }

        /* Sticky CTA */
        .sticky-cta {
          position: fixed;
          bottom: 0;
          left: 0;
          width: 100%;
          background: white;
          box-shadow: 0 -5px 20px rgba(0,0,0,0.1);
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
          color: #0f172a;
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
          background: #dc2626;
          color: white;
        }
        .btn-sm-outline {
          border: 1px solid #dc2626;
          color: #dc2626;
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

export default ABCPowder;