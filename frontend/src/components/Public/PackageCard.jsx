import React from 'react';

const PackageCard = ({ pkg, onBook }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
      <img src={pkg.image} alt={pkg.name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-bold mb-2">{pkg.name}</h3>
        <p className="text-gray-600 text-sm mb-2">{pkg.country}, {pkg.city}</p>
        <p className="text-gray-700 text-sm mb-4">{pkg.description.substring(0, 100)}...</p>
        <div className="flex justify-between items-center mb-4">
          <div>
            <p className="text-sm text-gray-500">Duration</p>
            <p className="text-lg font-bold">{pkg.duration} days</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Price</p>
            <p className="text-lg font-bold text-secondary">₹{pkg.price}</p>
          </div>
        </div>
        <button
          onClick={() => onBook(pkg.id)}
          className="w-full bg-primary text-white py-2 rounded-lg hover:bg-blue-600 transition"
        >
          Book Now
        </button>
      </div>
    </div>
  );
};

export default PackageCard;
