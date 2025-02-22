import React from 'react';
import './EventCard.css';

const EventCard = ({ title, date, location, text, link }) => {
  return (
    <div className="event-card">
      <h2 className="event-title">{title}</h2>
      <p className="event-date">{date}</p>
      <p className="event-location">{location}</p>
      <p className="event-text">{text}</p>
      {link && (
        <a href={link} target="_blank" rel="noopener noreferrer" className="event-link">
          Sign up here
        </a>
      )}
    </div>
  );
};

export default EventCard;
