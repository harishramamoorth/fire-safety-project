import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  FaFireExtinguisher, FaTint, FaFlask, FaIndustry, 
  FaSearch, FaTimes, FaArrowRight, FaCheckCircle,
  FaCertificate, FaShieldAlt, FaBoxes, FaFire,
  FaBuilding, FaWarehouse, FaHospital, FaChartLine
} from 'react-icons/fa';
import './Products.css';

const Products = () => {
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { id: 'all', name: 'All Products', icon: <FaBoxes />, count: 7 },
    { id: 'extinguishers', name: 'Fire Extinguishers', icon: <FaFireExtinguisher />, count: 2 },
    { id: 'foam', name: 'Foam Concentrates', icon: <FaFlask />, count: 3 },
    { id: 'powders', name: 'Dry Chemical Powders', icon: <FaIndustry />, count: 1 },
    { id: 'suppression', name: 'Suppression Systems', icon: <FaShieldAlt />, count: 1 },
    { id: 'equipment', name: 'Foam Equipment', icon: <FaTint />, count: 0 } // placeholder
  ];

  const products = [
    // ========== FIRE EXTINGUISHERS ==========
    {
      id: 1,
      name: 'ABC Dry Powder Extinguisher',
      slug: 'abc-extinguisher',
      category: 'extinguishers',
      shortDescription: 'Multi-purpose extinguisher for Class A, B, C fires. Ideal for homes, offices, and factories.',
      image: '/assets/images/abc-dry-chemical-powder-fire-extinguisher-1000x1000.jpg',
      features: ['Class A, B, C fires', '9kg capacity', '5 year warranty', 'CE Certified', 'BS EN3 compliant'],
      applications: ['Offices', 'Homes', 'Warehouses', 'Factories']
    },
    {
      id: 2,
      name: 'CO₂ Fire Extinguisher',
      slug: 'co2-extinguisher',
      category: 'extinguishers',
      shortDescription: 'Clean agent extinguisher for electrical fires. Leaves no residue, safe for sensitive equipment.',
      image: '/assets/images/CO2Extinguisher.jpg',
      features: ['Class B & Electrical fires', '2kg/5kg options', 'Non-conductive', 'No residue'],
      applications: ['Server rooms', 'Electrical panels', 'Data centers', 'Laboratories']
    },

    // ========== FOAM CONCENTRATES ==========
    {
      id: 3,
      name: 'AFFF Foam Concentrate',
      slug: 'afff-foam',
      category: 'foam',
      shortDescription: 'Aqueous Film Forming Foam for rapid knockdown of hydrocarbon fires.',
      image: '/assets/images/firefighting-foam.jpg',
      features: ['Class B fires', '1%, 3%, 6% proportioning', 'UL/FM approved', 'Fast knockdown'],
      applications: ['Oil refineries', 'Airports', 'Tank farms', 'Marine terminals']
    },
    {
      id: 4,
      name: 'AR-AFFF Foam Concentrate',
      slug: 'ar-afff-foam',
      category: 'foam',
      shortDescription: 'Alcohol resistant foam for polar solvents and hydrocarbons.',
      image: '/assets/images/firefighting-foam.jpg', // placeholder – replace with correct image
      features: ['Polar solvents & hydrocarbons', '6% proportioning', 'Excellent burnback resistance'],
      applications: ['Chemical plants', 'Ethanol storage', 'Biofuel facilities']
    },
    {
      id: 5,
      name: 'Protein Foam Concentrate',
      slug: 'protein-foam',
      category: 'foam',
      shortDescription: 'Natural protein-based foam for storage tank fire protection.',
      image: '/assets/images/ProteinFoamConcentrate.webp',
      features: ['Class B fires', '3% proportioning', 'Excellent stability', 'Long drain time'],
      applications: ['Storage tanks', 'Dike areas', 'Refineries']
    },

    // ========== DRY CHEMICAL POWDERS ==========
    {
      id: 6,
      name: 'ABC Dry Chemical Powder',
      slug: 'abc-powder',
      category: 'powders',
      shortDescription: 'Multi-purpose dry chemical powder for Class A, B, C fires.',
      image: '/assets/images/abc-powder-fire-extinguisher-01_1.jpg',
      features: ['Class A, B, C', 'High flow rate', 'Low moisture content', 'Free flowing'],
      applications: ['Industrial', 'Commercial', 'Marine', 'Oil & gas']
    },

    // ========== SUPPRESSION SYSTEMS ==========
    {
      id: 7,
      name: 'FM200 Suppression System',
      slug: 'fm200-system',
      category: 'suppression',
      shortDescription: 'Clean agent fire suppression system for sensitive areas.',
      image: '/assets/images/firefighting-foam.jpg', // placeholder
      features: ['Fast extinguishing', 'No residue', 'Safe for occupied spaces', 'Eco-friendly'],
      applications: ['Data centers', 'Telecom rooms', 'Archives', 'Medical facilities']
    }
  ];

  const filteredProducts = products.filter(product => {
    const matchesFilter = filter === 'all' || product.category === filter;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          product.shortDescription.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <>
      <Helmet>
        <title>Fire Protection Products | FireSafe</title>
        <meta name="description" content="Browse our range of certified fire protection products including extinguishers, foam concentrates, and suppression systems." />
      </Helmet>

      {/* Hero Section */}
      <section className="products-hero">
        <div className="container">
          <div className="hero-badge" data-aos="fade-up">Quality Fire Safety Equipment</div>
          <h1 data-aos="fade-up" data-aos-delay="100">Fire Protection <span className="highlight">Products</span></h1>
          <p data-aos="fade-up" data-aos-delay="200">Comprehensive range of certified equipment for every application</p>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="products-filter">
        <div className="container">
          <div className="filter-bar">
            <div className="search-box">
              <FaSearch className="search-icon" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              {searchTerm && (
                <button className="clear-search" onClick={() => setSearchTerm('')}>
                  <FaTimes />
                </button>
              )}
            </div>
            <div className="category-filters">
              {categories.map(cat => (
                <button
                  key={cat.id}
                  className={`filter-btn ${filter === cat.id ? 'active' : ''}`}
                  onClick={() => setFilter(cat.id)}
                >
                  {cat.icon}
                  <span>{cat.name}</span>
                  <span className="count">{cat.count}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="products-grid-section">
        <div className="container">
          {filteredProducts.length === 0 ? (
            <div className="no-results">
              <FaFire />
              <h3>No products found</h3>
              <p>Try adjusting your search or filter criteria</p>
            </div>
          ) : (
            <>
              <div className="products-header">
                <h2>All Products</h2>
                <p>Showing {filteredProducts.length} of {products.length} products</p>
              </div>
              <div className="products-grid">
                {filteredProducts.map((product, index) => (
                  <div className="product-card" key={product.id} data-aos="fade-up" data-aos-delay={index % 3 * 100}>
                    <div className="product-image">
                      <img src={product.image} alt={product.name} />
                      <div className="product-category">{categories.find(c => c.id === product.category)?.name}</div>
                    </div>
                    <div className="product-content">
                      <h3>{product.name}</h3>
                      <p className="product-description">{product.shortDescription}</p>
                      
                      <div className="product-features">
                        {product.features.slice(0, 3).map((feature, i) => (
                          <span key={i} className="feature-tag">
                            <FaCheckCircle /> {feature}
                          </span>
                        ))}
                      </div>
                      
                      <Link to={`/products/${product.slug}`} className="btn btn-primary btn-block">
                        View Details <FaArrowRight />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="container">
          <div className="features-grid">
            <div className="feature-card" data-aos="fade-up">
              <FaCertificate className="feature-icon" />
              <h3>Certified Quality</h3>
              <p>All products meet UL, FM, CE, and ISO international standards.</p>
            </div>
            <div className="feature-card" data-aos="fade-up" data-aos-delay="100">
              <FaShieldAlt className="feature-icon" />
              <h3>Global Standards</h3>
              <p>Compliant with NFPA, EN, and BS regulations worldwide.</p>
            </div>
            <div className="feature-card" data-aos="fade-up" data-aos-delay="200">
              <FaChartLine className="feature-icon" />
              <h3>Expert Support</h3>
              <p>50+ years of fire protection engineering expertise.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="products-cta">
        <div className="container">
          <div className="cta-content" data-aos="zoom-in">
            <h2>Need Help Choosing the Right Product?</h2>
            <p>Our fire safety experts are ready to assist with selection and system design</p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn btn-primary">Request a Quote</Link>
              <Link to="/services" className="btn btn-outline">View Services</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Products;