import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  FaTint, FaBell, FaFireExtinguisher, FaFlask, 
  FaChalkboardTeacher, FaCertificate, FaArrowRight 
} from 'react-icons/fa';
import SectionHeader from '../components/common/SectionHeader';
import './Services.css';

const Services = () => {
  const services = [
    {
      id: 'fire-suppression-systems',
      icon: <FaTint />,
      title: 'Fire Suppression Systems',
      description: 'Comprehensive fire suppression solutions including foam-based, gas-based (FM200, Novec 1230, CO₂), and water mist systems. Ideal for data centers, industrial facilities, and commercial buildings.',
      features: ['Foam-based systems', 'Gas suppression (FM200, Novec)', 'Water mist technology', 'Custom engineered solutions'],
      image: '/assets/images/Foam-1-1.png'                     // ✅ your Foam-1-1.png
    },
    {
      id: 'detection-alarm-systems',
      icon: <FaBell />,
      title: 'Detection & Alarm Systems',
      description: 'Advanced early warning systems that detect smoke, heat, and flames. Integrated with building management systems for rapid response and evacuation.',
      features: ['Smoke detectors', 'Heat sensors', 'Flame detectors', 'Addressable systems', 'Voice evacuation'],
      image: '/assets/images/isawred-PDbrz9VEAFA-unsplash.jpg' // ✅ your detection image
    },
    {
      id: 'fire-extinguishers',
      icon: <FaFireExtinguisher />,
      title: 'Fire Extinguishers',
      description: 'Complete range of portable fire extinguishers for different fire classes. Regular maintenance and refilling services available.',
      features: ['ABC dry powder', 'CO₂ extinguishers', 'Clean agent', 'Wet chemical', 'Foam extinguishers'],
      image: '/assets/images/fire-extinguisher.webp'          // ✅ your extinguisher image
    },
    {
      id: 'foam-concentrates',
      icon: <FaFlask />,
      title: 'Foam Concentrates',
      description: 'High-performance firefighting foam concentrates for Class B fires. Suitable for oil & gas, marine, and industrial applications.',
      features: ['AFFF foam', 'AR-AFFF foam', 'Protein foam', 'Fluoroprotein foam', 'High expansion foam'],
      image: '/assets/images/1-8.png'                        // ✅ your foam concentrates image
    },
    {
      id: 'safety-training',
      icon: <FaChalkboardTeacher />,
      title: 'Safety Training',
      description: 'Comprehensive fire safety training programs for your team. Includes hands-on extinguisher training, evacuation drills, and fire warden certification.',
      features: ['Fire warden training', 'Evacuation drills', 'Extinguisher training', 'Risk assessment', 'Online courses'],
      image: '/assets/images/disaster-training-emergency-service-workers-evacuate-survivor-from-gas-station.webp' // placeholder – replace with your own
    },
    {
      id: 'certification-testing',
      icon: <FaCertificate />,
      title: 'Certification & Testing',
      description: 'Internationally recognized testing and certification services. Ensure compliance with local and international fire safety standards.',
      features: ['CE marking', 'UKCA marking', 'UL testing', 'FM approvals', 'ISO certification'],
      image: '/assets/images/ma-frc-host-testing.jpg' // ✅ your certification image
    }
  ];

  return (
    <>
      <Helmet>
        <title>Our Services | FireSafe - Fire Protection Solutions</title>
        <meta name="description" content="Comprehensive fire protection services including suppression systems, detection alarms, extinguishers, foam concentrates, training, and certification." />
      </Helmet>

      <section className="page-header">
        <div className="container">
          <h1>Our Services</h1>
          <p>Comprehensive fire protection solutions for every need</p>
        </div>
      </section>

      <section className="services-detail section-padding">
        <div className="container">
          {services.map((service, index) => (
            <div className={`service-detail-card ${index % 2 === 1 ? 'reverse' : ''}`} key={service.id} data-aos="fade-up">
              {/* Image Column */}
              <div className="service-detail-image">
                <img src={service.image} alt={service.title} />
                <div className="image-overlay"></div>
              </div>

              {/* Content Column */}
              <div className="service-detail-content">
                <div className="service-detail-icon">{service.icon}</div>
                <h2>{service.title}</h2>
                <p>{service.description}</p>
                <ul className="feature-list">
                  {service.features.map((feature, i) => (
                    <li key={i}><FaArrowRight /> {feature}</li>
                  ))}
                </ul>
                <div className="service-buttons">
                  <Link to={`/services/${service.id}`} className="btn btn-outline">Learn More</Link>
                  <Link to="/contact" className="btn btn-primary">Request a Quote</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="why-choose-us section-padding">
        <div className="container">
          <SectionHeader
            subtitle="Why Choose Us"
            title="Why FireSafe?"
            description="What sets us apart from the competition"
          />
          <div className="why-grid">
            <div className="why-card">
              <h3>✓ 30+ Years Experience</h3>
              <p>Proven track record of excellence in fire protection</p>
            </div>
            <div className="why-card">
              <h3>✓ Global Presence</h3>
              <p>Serving clients in over 100 countries worldwide</p>
            </div>
            <div className="why-card">
              <h3>✓ Certified Experts</h3>
              <p>Highly trained and certified fire safety professionals</p>
            </div>
            <div className="why-card">
              <h3>✓ 24/7 Support</h3>
              <p>Round-the-clock technical support and emergency response</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;