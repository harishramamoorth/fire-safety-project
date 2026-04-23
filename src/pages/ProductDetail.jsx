import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { FaMapMarkerAlt, FaExclamationTriangle, FaClipboardCheck, FaCalendarAlt, FaArrowLeft } from 'react-icons/fa';
import './Products.css'; // Assuming you share styles or have a dedicated ProductDetail.css

// Mock Database incorporating data extracted from the Fire & Safety Brochure
const detailedProductsDB = {
  'abc-dry-powder-extinguisher': {
    name: 'ABC Dry Powder Extinguisher',
    category: 'Fire Extinguishers',
    image: 'https://images.unsplash.com/photo-1582139329536-e7284fece509?w=800',
    overview: 'The ABC Dry Powder Fire Extinguisher is a versatile suppression tool capable of tackling Class A, B, and C fires. To prevent fire-related incidents, ensure light materials are kept away from flammable ones.',
    installation: [
      'Keep fire extinguishers in plain sight for emergency access.',
      'Notify all employees or residents regarding the exact position of the extinguishers and fire exits.',
      'Install in accessible areas within Industrial Facilities, Warehouses, and Healthcare facilities.',
      'Store flammable materials at a moderate room temperature away from the extinguisher to prevent drastic temperature changes.'
    ],
    usage: [
      'In case a fire breaks out, DO NOT PANIC! Think straight and do what must be done.',
      'Pull the pin to break the tamper seal.',
      'Aim low, pointing the nozzle at the base of the fire.',
      'Squeeze the handle to release the extinguishing agent.',
      'Sweep from side to side until the fire is completely out.'
    ],
    analysis: {
      weekly: [
        'Ensure the extinguisher is in its designated place and fully visible.',
        'Check that the safety pin and tamper seal are intact.',
        'Verify the pressure gauge needle is in the green (operable) zone.'
      ],
      monthly: [
        'Inspect the hose and nozzle for cracks, blockages, or wear.',
        'Check the cylinder for signs of rust, corrosion, or physical damage.',
        'Record the inspection date and status on the maintenance tag.'
      ]
    }
  },
  'sprinkler-system-design': {
    name: 'Firewater Sprinkler System',
    category: 'Suppression Systems',
    image: 'https://images.unsplash.com/photo-1582139329536-e7284fece509?w=800',
    overview: 'Proper fire prevention systems like sprinkler systems and smoke alarms are essential to safeguarding homes and offices against sudden fire outbreaks.',
    installation: [
      'Ideal for Buildings & Infrastructure, Storage warehouses, and Healthcare facilities.',
      'Ensure the firewater network design covers all high-risk areas.',
      'Integrate with Fire & Gas Detection Systems for automated response.'
    ],
    usage: [
      'The system operates automatically upon detecting high heat from a fire.',
      'Do not paint or obstruct the sprinkler heads.',
      'Follow basic evacuation rules in order to save yourselves and property while the system activates.'
    ],
    analysis: {
      weekly: [
        'Check control valves to ensure they are open and accessible.',
        'Monitor water pressure gauges for normal operating levels.'
      ],
      monthly: [
        'Conduct a visual inspection of sprinkler heads for clearance and physical damage.',
        'Test the water flow alarm to ensure it communicates with the Fire Alarm System.'
      ]
    }
  }
};

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [activeTab, setActiveTab] = useState('overview');

  useEffect(() => {
    // In a real app, this would be an API call using the 'id' parameter
    // For now, we simulate fetching the data
    const fetchedProduct = detailedProductsDB[id] || detailedProductsDB['abc-dry-powder-extinguisher'];
    setProduct(fetchedProduct);
  }, [id]);

  if (!product) {
    return <div className="container section-padding"><h2>Loading product details...</h2></div>;
  }

  return (
    <>
      <Helmet>
        <title>{product.name} | FireSafe Details</title>
      </Helmet>

      <div className="product-detail-page section-padding">
        <div className="container">
          <Link to="/products" className="back-link"><FaArrowLeft /> Back to Products</Link>
          
          <div className="product-detail-header">
            <div className="product-detail-image">
              <img src={product.image} alt={product.name} />
            </div>
            <div className="product-detail-title-area">
              <span className="category-badge">{product.category}</span>
              <h1>{product.name}</h1>
              <p className="lead-text">{product.overview}</p>
            </div>
          </div>

          {/* Navigation Tabs for Detailed Extraction */}
          <div className="detail-tabs">
            <button className={`tab-btn ${activeTab === 'overview' ? 'active' : ''}`} onClick={() => setActiveTab('overview')}>
              Overview
            </button>
            <button className={`tab-btn ${activeTab === 'installation' ? 'active' : ''}`} onClick={() => setActiveTab('installation')}>
              <FaMapMarkerAlt /> Where to Install
            </button>
            <button className={`tab-btn ${activeTab === 'usage' ? 'active' : ''}`} onClick={() => setActiveTab('usage')}>
              <FaExclamationTriangle /> How to Use
            </button>
            <button className={`tab-btn ${activeTab === 'analysis' ? 'active' : ''}`} onClick={() => setActiveTab('analysis')}>
              <FaClipboardCheck /> Maintenance & Analysis
            </button>
          </div>

          {/* Tab Content Areas */}
          <div className="tab-content-container">
            {activeTab === 'overview' && (
              <div className="tab-pane fade-in">
                <h2>Product Overview</h2>
                <p>{product.overview}</p>
                <div className="safety-quote">
                  <blockquote>"Safety is not just a word; it's the way of life"</blockquote>
                </div>
              </div>
            )}

            {activeTab === 'installation' && (
              <div className="tab-pane fade-in">
                <h2>Placement & Installation Guidelines</h2>
                <ul className="custom-list">
                  {product.installation.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            )}

            {activeTab === 'usage' && (
              <div className="tab-pane fade-in">
                <h2>Operational Instructions</h2>
                <ul className="custom-list">
                  {product.usage.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            )}

            {activeTab === 'analysis' && (
              <div className="tab-pane fade-in analysis-grid">
                <div className="analysis-card weekly">
                  <h3><FaCalendarAlt /> Weekly Analysis Check</h3>
                  <ul>
                    {product.analysis.weekly.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div className="analysis-card monthly">
                  <h3><FaCalendarAlt /> Monthly Analysis Check</h3>
                  <ul>
                    {product.analysis.monthly.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>
          
        </div>
      </div>
    </>
  );
};

export default ProductDetail;