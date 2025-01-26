import React from 'react';
import './HomePage.css';
import Typewriter from 'typewriter-effect';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <section className="home">
      <h1 className="home-title">UofT Business Student Association</h1>
      <p className="home-slogan">
        <Typewriter
          options={{
            strings: [
              'Our business is to help you embrace business!',
              'Join us for networking events.',
              'Unlock your potential with UTBSA!',
            ],
            autoStart: true,
            loop: true,
          }}
        />
      </p>
      <div className="cards-section">
        <Link to="/events" className="card">
          <h2>Upcoming Events</h2>
          <p>Check out the exciting events happening soon!</p>
        </Link>
        <Link to="/about" className="card">
          <h2>About the Club</h2>
          <p>Learn more about the UTBSA and what we stand for!</p>
        </Link>
        <Link to="/links" className="card">
          <h2>Links</h2>
          <p>Everything you need to stay connected and not miss out!</p>
        </Link>
      </div>
    </section>
  );
};

export default HomePage;
