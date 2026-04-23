import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaMapMarkerAlt, FaIndustry, FaBuilding, FaHospital, FaUniversity, FaHotel } from 'react-icons/fa';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Louvre Abu Dhabi',
      category: 'Cultural',
      location: 'Abu Dhabi, UAE',
      description: 'Complete fire protection systems including pumps, sprinklers, and wet riser systems.',
      image: 'https://images.unsplash.com/photo-1566378246598-5b11a0d486cc?w=600',
      features: ['Fire pumps', 'Sprinkler systems', 'Wet risers', 'Detection systems']
    },
    {
      id: 2,
      title: 'Museum of the Future',
      category: 'Cultural',
      location: 'Dubai, UAE',
      description: 'Advanced fire detection and suppression systems for Dubai\'s iconic landmark.',
      image: 'https://images.unsplash.com/photo-1583417319070-4a69db38a482?w=600',
      features: ['Early smoke detection', 'Clean agent suppression', 'Voice evacuation']
    },
    {
      id: 3,
      title: 'Zayed University',
      category: 'Education',
      location: 'Dubai, UAE',
      description: 'Comprehensive safety systems for 200,000 sqm educational facility.',
      image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=600',
      features: ['Addressable fire alarm', 'Emergency lighting', 'Evacuation system']
    },
    {
      id: 4,
      title: 'Burj Khalifa',
      category: 'Commercial',
      location: 'Dubai, UAE',
      description: 'High-rise fire protection including pressurization and standpipe systems.',
      image: 'https://images.unsplash.com/photo-1486326658981-ed68abe5868e?w=600',
      features: ['Standpipe systems', 'Smoke management', 'Fire pumps']
    },
    {
      id: 5,
      title: 'ADNOC Headquarters',
      category: 'Oil & Gas',
      location: 'Abu Dhabi, UAE',
      description: 'Fire suppression for critical oil and gas control rooms.',
      image: 'https://images.unsplash.com/photo-1582139329536-e7284fece509?w=600',
      features: ['FM200 systems', 'Gas detection', 'Foam deluge']
    },
    {
      id: 6,
      title: 'Cleveland Clinic Abu Dhabi',
      category: 'Healthcare',
      location: 'Abu Dhabi, UAE',
      description: 'Hospital fire safety including compartmentation and evacuation.',
      image: 'https://images.unsplash.com/photo-1582139329536-e7284fece509?w=600',
      features: ['Fire barriers', 'Nurse call integration', 'Sprinklers']
    }
  ];

  return (
    <>
      <Helmet>
        <title>Our Projects | FireSafe</title>
        <meta name="description" content="Explore our portfolio of prestigious fire protection projects including museums, universities, and commercial buildings." />
      </Helmet>

      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <h1>Our Projects</h1>
          <p>Delivering world-class fire protection for iconic landmarks</p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="projects-section section-padding">
        <div className="container">
          <div className="projects-grid">
            {projects.map((project, index) => (
              <div className="project-card" key={project.id} data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                  <div className="project-category">{project.category}</div>
                </div>
                <div className="project-info">
                  <h3>{project.title}</h3>
                  <p className="project-location"><FaMapMarkerAlt /> {project.location}</p>
                  <p className="project-description">{project.description}</p>
                  <div className="project-features">
                    {project.features.map((feature, i) => (
                      <span key={i} className="feature-badge">{feature}</span>
                    ))}
                  </div>
                  <Link to={`/projects/${project.id}`} className="btn btn-outline-secondary">
                    View Project <FaArrowRight />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Have a Project in Mind?</h2>
            <p>Let our experts design a custom fire protection solution for your facility</p>
            <Link to="/contact" className="btn btn-primary">Contact Us Today</Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;