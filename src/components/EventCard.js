import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for internal navigation
import './EventCard.css';

const EventCard = ({ title, date, location, text, link }) => {
  const isExternal = link && (link.startsWith('http://') || link.startsWith('https://'));

  return (
    <div className="event-card">
      <h2 className="event-title">{title}</h2>
      <p className="event-date">{date}</p>
      <p className="event-location">{location}</p>
      <p className="event-text">{text}</p>

      {link && (
        isExternal ? (
          // External Link
          <a href={link} target="_blank" rel="noopener noreferrer" className="event-link">
            Sign up here
          </a>
        ) : (
          // Internal Link
          <Link to={link} className="event-link">
            Sign up here
          </Link>
        )
      )}
    </div>
  );
};

export default EventCard;
