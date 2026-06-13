import React from 'react';

const HeroSection = () => {
  return (
    <div className="bg-gradient-to-r from-primary to-secondary text-white py-20 text-center">
      <h1 className="text-5xl font-bold mb-4">Explore the World with TravelHub</h1>
      <p className="text-xl mb-8">Discover amazing destinations and create unforgettable memories</p>
      <div className="flex gap-4 justify-center">
        <a href="/packages" className="bg-white text-primary px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition">
          Explore Packages
        </a>
        <a href="/register" className="bg-accent text-white px-8 py-3 rounded-lg font-bold hover:bg-yellow-600 transition">
          Get Started
        </a>
      </div>
    </div>
  );
};

export default HeroSection;
