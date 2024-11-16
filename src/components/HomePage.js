import React from 'react';
import './HomePage.css';
import Typewriter from 'typewriter-effect';

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
        <div className="card">
          <h2>Networking Events</h2>
          <p>Connect with professionals and peers to grow your network.</p>
        </div>
        <div className="card">
          <h2>Workshops</h2>
          <p>Maybe change this to something else?</p>
        </div>
        <div className="card">
          <h2>Competitions</h2>
          <p>Participate in business case competitions and win prizes!</p>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
