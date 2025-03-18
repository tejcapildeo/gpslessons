import React from 'react';
import './HomePage.css';
import Typewriter from 'typewriter-effect';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';

const HomePage = () => {
  return (
    <section className="home">
      <Hero></Hero>
    </section>
  );
};

export default HomePage;
