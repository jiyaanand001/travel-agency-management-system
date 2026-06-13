import React from 'react';

const Home = () => {
  return (
    <div className="bg-light min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary to-secondary text-white py-20 text-center">
        <h1 className="text-5xl font-bold mb-4">Welcome to TravelHub</h1>
        <p className="text-xl mb-8">Your gateway to amazing travel experiences</p>
        <a href="/packages" className="bg-white text-primary px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition">
          Explore Packages
        </a>
      </div>

      {/* Features */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose TravelHub?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <div className="text-4xl mb-4">✈️</div>
            <h3 className="text-xl font-bold mb-2">Easy Booking</h3>
            <p className="text-gray-600">Book your dream vacation with just a few clicks</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <div className="text-4xl mb-4">🏆</div>
            <h3 className="text-xl font-bold mb-2">Best Prices</h3>
            <p className="text-gray-600">Get the best deals on travel packages</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <div className="text-4xl mb-4">💬</div>
            <h3 className="text-xl font-bold mb-2">24/7 Support</h3>
            <p className="text-gray-600">Our team is always ready to help you</p>
          </div>
        </div>
      </div>

      {/* Popular Destinations */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Popular Destinations</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-light p-4 rounded-lg shadow-lg text-center hover:shadow-xl transition">
              <div className="text-4xl mb-2">🏰</div>
              <h3 className="font-bold mb-2">Jaipur</h3>
              <p className="text-sm text-gray-600">Pink City Heritage</p>
            </div>
            <div className="bg-light p-4 rounded-lg shadow-lg text-center hover:shadow-xl transition">
              <div className="text-4xl mb-2">🏛️</div>
              <h3 className="font-bold mb-2">Agra</h3>
              <p className="text-sm text-gray-600">Taj Mahal Experience</p>
            </div>
            <div className="bg-light p-4 rounded-lg shadow-lg text-center hover:shadow-xl transition">
              <div className="text-4xl mb-2">🌊</div>
              <h3 className="font-bold mb-2">Kerala</h3>
              <p className="text-sm text-gray-600">Backwater Paradise</p>
            </div>
            <div className="bg-light p-4 rounded-lg shadow-lg text-center hover:shadow-xl transition">
              <div className="text-4xl mb-2">🏙️</div>
              <h3 className="font-bold mb-2">Mumbai</h3>
              <p className="text-sm text-gray-600">City of Dreams</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
