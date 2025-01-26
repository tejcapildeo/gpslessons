import React from 'react';
import './LinkCard.css';

const LinkCard = ({ url, title }) => {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer" className="link-card">
      {title}
    </a>
  );
};

export default LinkCard;
