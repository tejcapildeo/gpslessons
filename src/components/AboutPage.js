import React from 'react';
import './AboutPage.css';

const AboutPage = () => {
  return (
    <div className="about-page">
      <h1 className="about-title">About Us</h1>
      <p className="about-description">
        The University of Toronto Business Student Association (UTBSA) is dedicated to bridging the gap between academic theory and real-world experience. 
        Our mission is to empower students by providing opportunities to develop their skills, build professional networks, and gain hands-on experience in business-related fields.
      </p>
      <p className="about-motto">
        <strong>Our Motto:</strong> "Our business is to help you embrace business."
      </p>
      <p className="about-message">
        We host workshops, networking events, and competitions designed to enhance your knowledge and prepare you for the challenges of the professional world. 
        Whether you're looking to learn, lead, or connect, the UTBSA is here to support you every step of the way.
      </p>
    </div>
  );
};

export default AboutPage;
