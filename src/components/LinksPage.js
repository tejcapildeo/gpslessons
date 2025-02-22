import React from 'react';
import LinkCard from './LinkCard';
import './LinksPage.css';

const LinksPage = () => {
  const links = [
    { title: 'Event Registration Form', url: 'https://utbsa.org/signup' },
    { title: 'Instagram', url: 'https://www.instagram.com/uoftbsa_official/' },
    // { title: 'Netlify', url: 'https://netlify.com' },
    // { title: 'React Documentation', url: 'https://reactjs.org/docs/getting-started.html' },
  ];

  return (
    <div className="links-page">
      <h1 className="page-heading">Links</h1>
      <div className="links-container">
        {links.map((link, index) => (
          <LinkCard key={index} title={link.title} url={link.url} />
        ))}
      </div>
    </div>
  );
};

export default LinksPage;
