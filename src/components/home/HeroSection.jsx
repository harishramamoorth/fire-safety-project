import React from 'react';
import { Link } from 'react-router-dom';
import { FaHeadset, FaPlay } from 'react-icons/fa';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import './HeroSection.css';

const HeroSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3
  });

  const stats = [
    { number: 10, label: 'Years Experience', suffix: '+' },
    { number: 10, label: 'Countries Served', suffix: '+' },
    { number: 1200, label: 'Projects Completed', suffix: '+' },
    { number: 500, label: 'Happy Clients', suffix: '+' }
  ];

  return (
    <section className="hero">
      {/* Hero overlay with inline background image */}
      <div 
        className="hero-overlay" 
        style={{
          backgroundImage: "url('/assets/images/yuri-krupenin-qDeR3mqg4oU-unsplash.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      ></div>

      <div className="hero-content">
        <div className="container">
          <h1 data-aos="fade-up">
            Your Safety Is <span className="highlight">Our Mission</span>
          </h1>
          <p data-aos="fade-up" data-aos-delay="100">
            Comprehensive fire protection solutions — from advanced detection systems to high-performance suppression agents.
            Protecting lives, environment, and property worldwide.
          </p>
          <div className="hero-buttons" data-aos="fade-up" data-aos-delay="200">
            <Link to="/contact" className="btn btn-primary">
              <FaHeadset /> Get a Quote
            </Link>
            <Link to="/services" className="btn btn-outline">
              <FaPlay /> Our Services
            </Link>
          </div>
        </div>
      </div>

      <div className="hero-stats" ref={ref}>
        <div className="container">
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div className="stat-item" key={index} data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="stat-number">
                  {inView && <CountUp end={stat.number} duration={2.5} suffix={stat.suffix} />}
                </div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;