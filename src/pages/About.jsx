import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { FaCheckCircle, FaAward, FaUsers, FaGlobe, FaClock, FaShieldAlt } from 'react-icons/fa';
import SectionHeader from '../components/common/SectionHeader';
import Counter from '../components/common/Counter';
import './About.css';

const About = () => {
  const values = [
    { icon: <FaShieldAlt />, title: 'Trust & Integrity', description: 'We build lasting relationships through honesty and transparency.' },
    { icon: <FaUsers />, title: 'Customer Focus', description: 'Your safety is our top priority in everything we do.' },
    { icon: <FaGlobe />, title: 'Global Standards', description: 'We adhere to international safety and quality standards.' },
    { icon: <FaAward />, title: 'Innovation', description: 'Continuous improvement and cutting-edge solutions.' }
  ];

  const stats = [
    { number: 10, label: 'Years of Excellence', suffix: '+' },
    { number: 10, label: 'Countries Served', suffix: '+' },
    { number: 1200, label: 'Projects Completed', suffix: '+' },
    { number: 500, label: 'Happy Clients', suffix: '+' }
  ];

  return (
    <>
      <Helmet>
        <title>About Us | FireSafe - Fire Protection Experts</title>
        <meta name="description" content="Learn about FireSafe's 30+ years of excellence in fire protection. We're committed to protecting lives and property worldwide with innovative solutions." />
      </Helmet>

      <section className="page-header">
        <div className="container">
          <h1>About Us</h1>
          <p>Learn more about our mission, values, and expertise</p>
        </div>
      </section>

      <section className="about-story section-padding">
        <div className="container">
          <div className="story-grid">
            <div className="story-content" data-aos="fade-right">
              <span className="subtitle">Our Story</span>
              <h2>Protecting Lives for Over 10 Years</h2>
              <p>FireSafe was founded with a simple yet powerful mission: to protect lives, property, and the environment through innovative fire safety solutions. Today, we're proud to be among the world's leading providers of fire protection systems.</p>
              <p>With a presence in over 10 countries and thousands of successful projects, we've earned the trust of iconic landmarks, industrial facilities, and government institutions worldwide.</p>
              <div className="stats-container">
                {stats.map((stat, index) => (
                  <div className="stat-box" key={index}>
                    <div className="stat-number"><Counter end={stat.number} suffix={stat.suffix} /></div>
                    <div className="stat-label">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="story-image" data-aos="fade-left">
              {/* ✅ Using your local image */}
              <img src="/assets/images/4qjE39zRjC-660.jpeg" alt="FireSafe Team at work" />
            </div>
          </div>
        </div>
      </section>

      <section className="values section-padding">
        <div className="container">
          <SectionHeader
            subtitle="Our Core Values"
            title="What Drives Us"
            description="These values guide everything we do at FireSafe"
          />
          <div className="values-grid">
            {values.map((value, index) => (
              <div className="value-card" key={index} data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="value-icon">{value.icon}</div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mission-vision section-padding">
        <div className="container">
          <div className="mv-grid">
            <div className="mission" data-aos="fade-right">
              <h3>Our Mission</h3>
              <p>To provide world-class fire protection solutions that safeguard lives, protect property, and preserve the environment through innovation, quality, and unwavering commitment to safety.</p>
            </div>
            <div className="vision" data-aos="fade-left">
              <h3>Our Vision</h3>
              <p>To be the world's leading provider of innovative fire safety solutions, setting the standard for excellence and making every space safer for generations to come.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="certifications section-padding">
        <div className="container">
          <SectionHeader
            subtitle="Certifications"
            title="Our Accreditations"
            description="We hold internationally recognized certifications"
          />
          <div className="certs-grid">
            <div className="cert-card">ISO 9001:2015</div>
            <div className="cert-card">UL Listed</div>
            <div className="cert-card">FM Approved</div>
            <div className="cert-card">CE Marked</div>
            <div className="cert-card">UKCA Marked</div>
            <div className="cert-card">LPCB Certified</div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;