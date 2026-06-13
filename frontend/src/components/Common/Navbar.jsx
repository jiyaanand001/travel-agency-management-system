import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-primary text-white shadow-lg">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold">🌍 TravelHub</div>
        <div className="flex gap-6">
          <a href="/" className="hover:text-accent transition">Home</a>
          <a href="/packages" className="hover:text-accent transition">Packages</a>
          <a href="/about" className="hover:text-accent transition">About</a>
          <a href="/contact" className="hover:text-accent transition">Contact</a>
          <a href="/login" className="hover:text-accent transition">Login</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
