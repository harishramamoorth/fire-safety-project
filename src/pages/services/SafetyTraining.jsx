import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  FaArrowLeft, FaCheckCircle, FaChalkboardTeacher, FaFire, 
  FaUsers, FaCertificate, FaVideo, FaClipboardList, FaAward
} from 'react-icons/fa';

const SafetyTraining = () => {
  return (
    <>
      <Helmet>
        <title>Fire Safety Training | FireSafe</title>
        <meta name="description" content="Hands-on fire extinguisher training, evacuation drills, and fire warden certification. Certified instructors, live fire props." />
      </Helmet>

      <div className="training-service-page">
        {/* Hero Section with background image */}
        <div className="hero-section">
          <div className="hero-overlay"></div>
          <div className="container hero-content">
            <Link to="/services" className="back-link-light">
              <FaArrowLeft /> Back to Services
            </Link>
            <div className="hero-icon">
              <FaChalkboardTeacher />
            </div>
            <h1>Safety Training</h1>
            <p>Empower your team with life‑saving skills</p>
          </div>
        </div>

        <div className="container">
          {/* Introduction */}
          <div className="intro-section">
            <p className="lead-text">
              All courses are delivered by certified fire safety professionals and include certificates of attendance. 
              Choose from on‑site, off‑site, or online training to fit your schedule.
            </p>
          </div>

          {/* Main Image – using your provided image */}
          <div className="main-image-wrapper">
            <img 
              src="/assets/images/Blog-FireSafety-Training-v1.jpg"
              alt="Fire safety training session"
              className="main-image"
            />
          </div>

          {/* Course Types Grid */}
          <div className="courses-grid">
            <div className="course-card">
              <FaAward className="course-icon" />
              <h3>Fire Warden / Marshal</h3>
              <p>Certification course covering leadership during evacuations, fire prevention, and emergency communication.</p>
            </div>
            <div className="course-card">
              <FaFire className="course-icon" />
              <h3>Practical Extinguisher Training</h3>
              <p>Live fire props using real extinguishers (ABC, CO₂, wet chemical). PASS technique, selection, and safety.</p>
            </div>
            <div className="course-card">
              <FaUsers className="course-icon" />
              <h3>Evacuation Drills & Exercises</h3>
              <p>Tabletop or full‑scale drills. Post‑drill analysis and improvement plans.</p>
            </div>
            <div className="course-card">
              <FaClipboardList className="course-icon" />
              <h3>Fire Risk Assessment</h3>
              <p>For safety officers and managers – how to identify hazards, evaluate risks, and document findings.</p>
            </div>
            <div className="course-card">
              <FaVideo className="course-icon" />
              <h3>Online Awareness Courses</h3>
              <p>Self‑paced modules: fire basics, evacuation procedures, and extinguisher use. Certificate upon completion.</p>
            </div>
            <div className="course-card">
              <FaCertificate className="course-icon" />
              <h3>Customised On‑Site Training</h3>
              <p>Tailored to your facility, equipment, and specific fire risks. Includes hands‑on drills.</p>
            </div>
          </div>

          {/* Key Benefits */}
          <div className="benefits-section">
            <h2>Why Train With Us?</h2>
            <div className="benefits-grid">
              <div className="benefit">
                <FaCheckCircle className="benefit-icon" />
                <span>Certified instructors with real‑world experience</span>
              </div>
              <div className="benefit">
                <FaCheckCircle className="benefit-icon" />
                <span>Live fire training on approved props (safe & controlled)</span>
              </div>
              <div className="benefit">
                <FaCheckCircle className="benefit-icon" />
                <span>Compliance with local civil defence and OSHA requirements</span>
              </div>
              <div className="benefit">
                <FaCheckCircle className="benefit-icon" />
                <span>Flexible scheduling – weekdays, weekends, or evenings</span>
              </div>
              <div className="benefit">
                <FaCheckCircle className="benefit-icon" />
                <span>Digital certificates and training records provided</span>
              </div>
            </div>
          </div>

          {/* Target Audience */}
          <div className="audience-section">
            <h2>Who Should Attend?</h2>
            <div className="audience-list">
              <span>Facility Managers</span>
              <span>Safety Officers</span>
              <span>Fire Wardens / Marshals</span>
              <span>General Staff (all employees)</span>
              <span>Contractors & Visitors</span>
              <span>Hospitality & Restaurant Staff</span>
              <span>Industrial Plant Workers</span>
            </div>
          </div>

          {/* Course Format Options */}
          <div className="format-section">
            <h2>Training Formats</h2>
            <div className="format-grid">
              <div className="format-card">
                <h3>On‑Site</h3>
                <p>At your facility using your extinguishers and evacuation routes. Maximum realism.</p>
              </div>
              <div className="format-card">
                <h3>Off‑Site</h3>
                <p>At our training centre with dedicated fire props and classroom facilities.</p>
              </div>
              <div className="format-card">
                <h3>Online</h3>
                <p>Self‑paced video modules with quizzes. Ideal for refresher training.</p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="cta-section">
            <div className="cta-content">
              <h3>Ready to equip your team with life‑saving skills?</h3>
              <p>Contact us to discuss your training needs and schedule a session.</p>
              <Link to="/contact" className="btn btn-large">Book a Course →</Link>
            </div>
          </div>
        </div>
      </div>

      {/* Embedded CSS – Green & White Theme */}
      <style jsx>{`
        .training-service-page {
          font-family: 'Poppins', 'Segoe UI', sans-serif;
          background: var(--white);
        }

        .hero-section {
          position: relative;
          background: linear-gradient(135deg, var(--dark) 0%, var(--secondary) 100%);
          min-height: 400px;
          display: flex;
          align-items: center;
          color: var(--white);
          margin-bottom: 60px;
          overflow: hidden;
        }

        .hero-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: url('/assets/images/Blog-FireSafety-Training-v1.jpg');
          background-size: cover;
          background-position: center;
          opacity: 0.15;
          z-index: 0;
        }

        .hero-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0,0,0,0.4);
          z-index: 1;
        }

        .hero-content {
          position: relative;
          z-index: 2;
          text-align: center;
          padding: 80px 20px;
        }

        .back-link-light {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: var(--primary-light);
          text-decoration: none;
          margin-bottom: 30px;
          font-weight: 500;
          transition: 0.3s;
        }

        .back-link-light:hover {
          color: var(--white);
        }

        .hero-icon {
          font-size: 4rem;
          margin-bottom: 20px;
          animation: pulse 2s infinite;
        }

        @keyframes pulse {
          0% { transform: scale(1); opacity: 0.8; }
          50% { transform: scale(1.05); opacity: 1; }
          100% { transform: scale(1); opacity: 0.8; }
        }

        .hero-content h1 {
          font-size: 3rem;
          margin-bottom: 20px;
          font-weight: 700;
        }

        .hero-content p {
          font-size: 1.3rem;
          opacity: 0.9;
        }

        .lead-text {
          font-size: 1.2rem;
          line-height: 1.6;
          color: var(--gray-dark);
          text-align: center;
          max-width: 800px;
          margin: 0 auto 40px;
        }

        .main-image-wrapper {
          margin: 40px 0;
          border-radius: 24px;
          overflow: hidden;
          box-shadow: 0 20px 40px rgba(0,0,0,0.08);
        }

        .main-image {
          width: 100%;
          height: auto;
          display: block;
          transition: transform 0.5s ease;
        }

        .main-image:hover {
          transform: scale(1.02);
        }

        .courses-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 30px;
          margin: 60px 0;
        }

        .course-card {
          background: var(--white);
          padding: 30px;
          border-radius: 20px;
          box-shadow: var(--shadow);
          transition: 0.3s;
          text-align: center;
        }

        .course-card:hover {
          transform: translateY(-5px);
          box-shadow: var(--shadow-lg);
        }

        .course-icon {
          font-size: 2.5rem;
          color: var(--primary);
          margin-bottom: 20px;
        }

        .course-card h3 {
          font-size: 1.4rem;
          margin-bottom: 15px;
          color: var(--secondary);
        }

        .course-card p {
          color: var(--gray);
          line-height: 1.5;
        }

        .benefits-section {
          background: var(--white);
          padding: 50px;
          border-radius: 24px;
          margin: 50px 0;
          text-align: center;
          box-shadow: var(--shadow);
        }

        .benefits-section h2 {
          font-size: 2rem;
          color: var(--secondary);
          margin-bottom: 30px;
        }

        .benefits-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 20px;
          text-align: left;
        }

        .benefit {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 10px;
          background: var(--light-gray);
          border-radius: 12px;
        }

        .benefit-icon {
          color: var(--primary);
          font-size: 1.2rem;
          flex-shrink: 0;
        }

        .benefit span {
          color: var(--dark);
          font-weight: 500;
        }

        .audience-section {
          background: var(--white);
          border-radius: 24px;
          padding: 40px;
          margin: 50px 0;
          text-align: center;
          border: 1px solid var(--gray-light);
        }

        .audience-section h2 {
          font-size: 2rem;
          color: var(--secondary);
          margin-bottom: 25px;
        }

        .audience-list {
          display: flex;
          flex-wrap: wrap;
          gap: 15px;
          justify-content: center;
        }

        .audience-list span {
          background: var(--primary-lightest);
          padding: 10px 22px;
          border-radius: 40px;
          font-size: 0.9rem;
          font-weight: 500;
          color: var(--secondary);
        }

        .format-section {
          background: var(--white);
          border-radius: 24px;
          padding: 40px;
          margin: 50px 0;
          border: 1px solid var(--gray-light);
          text-align: center;
        }

        .format-section h2 {
          font-size: 2rem;
          color: var(--secondary);
          margin-bottom: 30px;
        }

        .format-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 25px;
        }

        .format-card {
          background: var(--light-gray);
          padding: 25px;
          border-radius: 16px;
          transition: 0.3s;
        }

        .format-card:hover {
          background: var(--white);
          box-shadow: var(--shadow);
        }

        .format-card h3 {
          font-size: 1.3rem;
          color: var(--secondary);
          margin-bottom: 12px;
        }

        .format-card p {
          color: var(--gray);
        }

        .cta-section {
          background: linear-gradient(135deg, var(--secondary) 0%, var(--dark) 100%);
          border-radius: 24px;
          padding: 50px;
          text-align: center;
          margin: 60px 0 80px;
        }

        .cta-content h3 {
          font-size: 1.8rem;
          color: var(--white);
          margin-bottom: 15px;
        }

        .cta-content p {
          color: var(--gray-light);
          margin-bottom: 25px;
        }

        .btn-large {
          display: inline-block;
          background: var(--primary);
          color: var(--white);
          padding: 12px 32px;
          border-radius: 40px;
          text-decoration: none;
          font-weight: 600;
          transition: 0.3s;
        }

        .btn-large:hover {
          background: var(--primary-dark);
          transform: scale(1.05);
        }

        @media (max-width: 768px) {
          .hero-content h1 { font-size: 2rem; }
          .hero-content p { font-size: 1rem; }
          .benefits-section { padding: 30px; }
          .format-section { padding: 30px; }
          .audience-section h2,
          .benefits-section h2,
          .format-section h2 {
            font-size: 1.5rem;
          }
        }
      `}</style>
    </>
  );
};

export default SafetyTraining;