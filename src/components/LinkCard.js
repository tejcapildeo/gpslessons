import React from 'react';
import { Link } from 'react-router-dom';
import './LinkCard.css';

const LinkCard = ({ url, title }) => {
  const isExternal = url?.startsWith('http://') || url?.startsWith('https://');

  return isExternal ? (
    <a href={url} target="_blank" rel="noopener noreferrer" className="link-card">
      {title}
    </a>
  ) : (
    <Link to={url} className="link-card">
      {title}
    </Link>
  );
};

export default LinkCard;
