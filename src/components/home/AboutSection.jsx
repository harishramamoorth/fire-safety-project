import React from 'react';
import { Link } from 'react-router-dom';
import { FaCheckCircle } from 'react-icons/fa';
import Counter from '../common/Counter';
import './AboutSection.css';

const AboutSection = () => {
  const features = [
    'ISO 9001:2015 Certified',
    'UL & FM Approved Products',
    '24/7 Technical Support',
    'Global Delivery Network'
  ];

  const stats = [
    { number: 10, label: 'Years of Excellence', suffix: '+' },
    { number: 10, label: 'Countries Worldwide', suffix: '+' },
    { number: 1200, label: 'Projects Delivered', suffix: '+' },
    { number: 500, label: 'Happy Clients', suffix: '+' }
  ];

  return (
    <section className="about section-padding">
      <div className="container">
        <div className="about-grid">
          {/* Left: Our Story content */}
          <div className="about-content" data-aos="fade-right">
            <span className="subtitle">About Us</span>
            <h2>Our Story</h2>
            <h3 className="story-headline">Protecting Lives for Over 10 Years</h3>
            <p>
              FireSafe was founded with a simple yet powerful mission: to protect lives, property, 
              and the environment through innovative fire safety solutions. Today, we're proud to 
              be among the world's leading providers of fire protection systems.
            </p>
            <p>
              With a presence in over 10 countries and thousands of successful projects, we've 
              earned the trust of iconic landmarks, industrial facilities, and government 
              institutions worldwide.
            </p>
            <div className="features-list">
              {features.map((feature, index) => (
                <div className="feature" key={index}>
                  <FaCheckCircle /> {feature}
                </div>
              ))}
            </div>
            <Link to="/about" className="btn btn-secondary">Learn More About Us</Link>
          </div>

          {/* Right: Image with caption + Stats */}
          <div className="about-right" data-aos="fade-left">
            <div className="about-image-wrapper">
              <img 
                src="/assets/images/4qjE39zRjC-660.jpeg"  // 🔁 CHANGE THIS PATH TO YOUR NEW IMAGE
                alt="Fire extinguisher mounted on wall - fire safety equipment"
                className="about-image"
              />
              <div className="image-overlay"></div>
            </div>
            <div className="image-caption">
              A close-up view of a fire extinguisher mounted on a wall, showcasing its design and features.
            </div>
            <div className="about-stats">
              {stats.map((stat, index) => (
                <div className="stat-card" key={index}>
                  <div className="stat-number">
                    <Counter end={stat.number} suffix={stat.suffix} />
                  </div>
                  <div className="stat-text">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;