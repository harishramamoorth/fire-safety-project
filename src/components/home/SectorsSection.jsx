import React from 'react';
import { FaTint, FaBell, FaFireExtinguisher, FaFlask, FaChalkboardTeacher, FaCertificate } from 'react-icons/fa';
import SectionHeader from '../common/SectionHeader';
import ServiceCard from '../common/ServiceCard';
import './ServicesSection.css';

const ServicesSection = () => {
  const services = [
    {
      id: 'suppression',
      icon: <FaTint />,
      title: 'Fire Suppression Systems',
      description: 'Foam-based, gas-based, and water mist systems for industrial applications.',
      link: '/services/suppression'
    },
    {
      id: 'detection',
      icon: <FaBell />,
      title: 'Detection & Alarms',
      description: 'State-of-the-art smoke detectors, heat sensors, and intelligent alarm systems.',
      link: '/services/detection'
    },
    {
      id: 'extinguishers',
      icon: <FaFireExtinguisher />,
      title: 'Fire Extinguishers',
      description: 'ABC, BC, CO2, clean agent, wet chemical, and specialty extinguishers.',
      link: '/services/extinguishers'
    },
    {
      id: 'foam',
      icon: <FaFlask />,
      title: 'Foam Concentrates',
      description: 'AFFF, AR-AFFF, protein, fluoroprotein, and high-expansion foams.',
      link: '/services/foam'
    },
    {
      id: 'training',
      icon: <FaChalkboardTeacher />,
      title: 'Safety Training',
      description: 'On-site and virtual training for fire safety protocols and emergency response.',
      link: '/services/training'
    },
    {
      id: 'certification',
      icon: <FaCertificate />,
      title: 'Certification & Testing',
      description: 'Internationally recognized testing and CE/UKCA marking services.',
      link: '/services/certification'
    }
  ];

  return (
    <section className="services section-padding">
      <div className="container">
        <SectionHeader
          subtitle="What We Offer"
          title="Our Core Services"
          description="Comprehensive fire protection solutions tailored to your specific needs"
        />
        <div className="services-grid">
          {services.map((service, index) => (
            <ServiceCard
              key={service.id}
              {...service}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;