import React from 'react';
import './GoogleFormPage.css';

const GoogleFormPage = () => {
  return (
    <div className="google-form-container">
      <h1 className="form-title">Event sign up form</h1>
      <p className="form-description">
        Please fill out the form below to sign up for our amazing event!
      </p>
      <div className="form-embed">
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSf3o_6BoGKF_3JiKtV5qbBAEEi5y8cVxR0DDMlhdOBM1KvzHA/viewform?embedded=true"
          width="100%"
          height="800"
          frameBorder="0"
          marginHeight="0"
          marginWidth="0"
          title="Google Form"
          allowFullScreen
        >
          Loading…
        </iframe>
      </div>
    </div>
  );
};

export default GoogleFormPage;
