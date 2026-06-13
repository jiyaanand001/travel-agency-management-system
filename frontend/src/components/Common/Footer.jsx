import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-8 mt-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">🌍 TravelHub</h3>
            <p className="text-gray-400">Your trusted travel companion for unforgettable journeys.</p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="text-gray-400 space-y-2">
              <li><a href="/" className="hover:text-white">Home</a></li>
              <li><a href="/packages" className="hover:text-white">Packages</a></li>
              <li><a href="/about" className="hover:text-white">About Us</a></li>
              <li><a href="/contact" className="hover:text-white">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Support</h4>
            <ul className="text-gray-400 space-y-2">
              <li><a href="#" className="hover:text-white">Help Center</a></li>
              <li><a href="#" className="hover:text-white">FAQs</a></li>
              <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white">Terms of Service</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Contact Info</h4>
            <p className="text-gray-400 mb-2">Email: info@travelhub.com</p>
            <p className="text-gray-400 mb-2">Phone: +91-9876543210</p>
            <p className="text-gray-400">Address: 123 Travel Street, Mumbai, India</p>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
          <p>&copy; 2026 TravelHub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
