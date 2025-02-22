import React from 'react';
import LinkCard from './LinkCard';
import './SponsorsPage.css';

const SponsorsPage = () => {
  const links = [
    { title: 'Example sponsor 1', url: 'https://l.instagram.com/?u=https%3A%2F%2Fforms.gle%2FpWX9twHsXshK26XQ9%3Ffbclid%3DPAZXh0bgNhZW0CMTEAAaYWkKkzBX_yFvXNSMnjsaBpxwCPykgRJcow4EaZZXgbmszidlMeZWrvlys_aem_T87i8nod_YHcIpuNBsjIOQ&e=AT2wwtPBvfKiiZyYZUazJxkLtdJ2LpM8OdR3WNzCU50oWPdPB5ki7edoo8Wsdrus6sJIZbF9j3krsKq5Y0P5XqZONx9Wf7zw916-kc97ljG8fK8JOq0Jjg' },
    { title: 'Example sponsor 2', url: 'https://www.instagram.com/uoftbsa_official/' },
    // { title: 'Netlify', url: 'https://netlify.com' },
    // { title: 'React Documentation', url: 'https://reactjs.org/docs/getting-started.html' },
  ];

  return (
    <div className="links-page">
      <h1 className="page-heading">Sponsors</h1>
      <div className="links-container">
        {links.map((link, index) => (
          <LinkCard key={index} title={link.title} url={link.url} />
        ))}
      </div>
    </div>
  );
};

export default SponsorsPage;
