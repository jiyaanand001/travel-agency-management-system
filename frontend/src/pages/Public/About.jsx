import React from 'react';

const About = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-8">About TravelHub</h1>

      <div className="max-w-3xl mx-auto">
        <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
          <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
          <p className="text-gray-700 leading-relaxed">
            At TravelHub, our mission is to make travel accessible, affordable, and unforgettable for everyone. We believe that travel brings people together, broadens perspectives, and creates lasting memories. Our dedicated team works tirelessly to curate the best travel experiences and packages that suit every budget and preference.
          </p>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
          <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
          <p className="text-gray-700 leading-relaxed">
            We envision a world where travel is personalized, transparent, and hassle-free. By combining cutting-edge technology with world-class customer service, we aim to be the go-to platform for travelers seeking unique and authentic experiences across the globe.
          </p>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Why Choose Us?</h2>
          <ul className="text-gray-700 space-y-3">
            <li>✈️ Curated travel packages for every budget</li>
            <li>🏨 Verified accommodations and service providers</li>
            <li>💰 Competitive prices and special discounts</li>
            <li>📱 Easy-to-use mobile and web platforms</li>
            <li>👥 Dedicated customer support team</li>
            <li>🌍 Destinations across the globe</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
