import React from 'react';
import { Helmet } from 'react-helmet-async';
import HeroSection from '../components/home/HeroSection';
import ServicesSection from '../components/home/ServicesSection';
import AboutSection from '../components/home/AboutSection';
import SectorsSection from '../components/home/SectorsSection';
import SafetyTipsSection from '../components/home/SafetyTipsSection';
import ProjectsSection from '../components/home/ProjectsSection';
import TestimonialsSection from '../components/home/TestimonialsSection';
import CTASection from '../components/home/CTASection';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>FireSafe | Fire & Safety Systems Engineering</title>
        <meta name="description" content="Leading provider of fire protection solutions including suppression systems, detection alarms, foam concentrates, and safety training. Serving 100+ countries worldwide." />
        <meta name="keywords" content="fire safety, fire protection, fire suppression, fire extinguishers, UAE, Dubai" />
      </Helmet>
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <SectorsSection />
      <SafetyTipsSection />
      <ProjectsSection />
      <TestimonialsSection />
      <CTASection />
    </>
  );
};

export default Home;