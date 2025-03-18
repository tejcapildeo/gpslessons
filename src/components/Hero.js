import React, { useState } from 'react';
import './Hero.css';
import { Link } from 'react-router-dom';

const Hero = () => {
    return(
        <div className="h-screen flex items-center justify-center bg-transparent px-8">
      <div className="max-w-6xl w-full flex flex-col-reverse md:flex-row items-center gap-8">
        {/* Left Side - Text Content */}
        <div className="flex-1 text-center md:text-left  ">
          <h1 className="text-4xl md:text-6xl font-extrabold text-[#800000] leading-tight ">
            Crash courses are here!
          </h1>
          <p className="text-gray-600 mt-4 text-lg">
            Something exciting here to talk about the crash course mayb
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Link to="/crashcourse" className="px-6 py-3 text-white bg-[#800000] hover:bg-gray-700 rounded-lg font-medium transition">
              Learn More
            </Link>
            <button className="px-6 py-3 border border-[#800000] hover:bg-gray-700 hover:text-white hover:border-gray-700 rounded-lg font-medium transition text-[#800000]">
              Contact Us
            </button>
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="flex-1">
          <img
            src="/images/5.png"
            alt="Learning Illustration"
            className="w-full max-w-md mx-auto md:mx-0"
          />
        </div>
      </div>
    </div>
    )
};

export default Hero;