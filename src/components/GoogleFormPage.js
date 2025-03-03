import React from 'react';
import './GoogleFormPage.css';
import LinkCard from './LinkCard';
import './SponsorsPage.css';

const GoogleFormPage = () => {
  // return (
    // <div className="google-form-container">
    //   <h1 className="form-title">Event sign up form</h1>
    //   <p className="form-description">
    //     Please fill out the form below to sign up for our amazing event!
    //   </p>
    //   <div className="form-embed">
    //     <iframe
    //       src="https://docs.google.com/forms/d/e/1FAIpQLSf3o_6BoGKF_3JiKtV5qbBAEEi5y8cVxR0DDMlhdOBM1KvzHA/viewform?embedded=true"
    //       width="100%"
    //       height="800"
    //       frameBorder="0"
    //       marginHeight="0"
    //       marginWidth="0"
    //       title="Google Form"
    //       allowFullScreen
    //     >
    //       Loading…
    //     </iframe>
    //   </div>
    // </div>

    const links = [
      { title: 'Sign Up Here!', url: 'https://docs.google.com/forms/d/e/1FAIpQLSeZTDnB6N8iF3hcnFS365B0vnHpstmM_3URO7Umy0rgTbVvtw/viewform?usp=header'}
      // { title: 'Netlify', url: 'https://netlify.com' },
      // { title: 'React Documentation', url: 'https://reactjs.org/docs/getting-started.html' },
    ];
  
    return (
      <div className="links-page">
        <h1 className="page-heading">Event Sign Up</h1>
        <div className="links-container">
          {links.map((link, index) => (
            <LinkCard key={index} title={link.title} url={link.url} />
          ))}
        </div>
      </div>
  );
};

export default GoogleFormPage;
