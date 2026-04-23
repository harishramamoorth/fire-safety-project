import React from 'react';
import { Helmet } from 'react-helmet-async';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa';
import ContactForm from '../components/forms/ContactForm';
import './Contact.css';

const Contact = () => {
  const contactInfo = [
    { icon: <FaMapMarkerAlt />, title: 'Visit Us', details: ['Dubai, United Arab Emirates', 'Business Bay, Tower A, Floor 15'] },
    { icon: <FaPhone />, title: 'Call Us', details: ['Emergency: +971 ******67', 'Office: +971******1'] },
    { icon: <FaEnvelope />, title: 'Email Us', details: ['Info: MRG@firesafe.com', 'Sales: MRG@firesafe.com'] },
    { icon: <FaClock />, title: 'Working Hours', details: ['Sat-Thu: 8:00 AM - 6:00 PM', 'Fri: Closed'] }
  ];

  return (
    <>
      <Helmet>
        <title>Contact Us | FireSafe - Get in Touch</title>
        <meta name="description" content="Contact FireSafe for fire protection solutions. Request a quote, consultation, or support. Our experts are ready to help you 24/7." />
      </Helmet>

      <section className="page-header">
        <div className="container">
          <h1>Contact Us</h1>
          <p>Get in touch with our fire safety experts</p>
        </div>
      </section>

      <section className="contact-info-section section-padding">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info-cards" data-aos="fade-right">
              {contactInfo.map((info, index) => (
                <div className="info-card" key={index}>
                  <div className="info-icon">{info.icon}</div>
                  <div className="info-content">
                    <h3>{info.title}</h3>
                    {info.details.map((detail, i) => (
                      <p key={i}>{detail}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <div className="contact-form-container" data-aos="fade-left">
              <h2>Send us a Message</h2>
              <p>Fill out the form below and our team will get back to you shortly.</p>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <section className="map-section">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14443.687543575548!2d55.2701826!3d25.2048493!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43348a6e2391%3A0x4d5c3c5a5c5c5c5c!2sDubai%2C%20United%20Arab%20Emirates!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          title="FireSafe Location"
        ></iframe>
      </section>
    </>
  );
};

export default Contact;