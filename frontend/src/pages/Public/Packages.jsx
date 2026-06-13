import React, { useState, useEffect } from 'react';
import useAuth from '../../hooks/useAuth';
import useToast from '../../hooks/useToast';
import packageService from '../../services/packageService';
import Loader from '../../components/Common/Loader';
import PackageCard from '../../components/Public/PackageCard';

const Packages = () => {
  const { success, error } = useToast();
  const [packages, setPackages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetchPackages();
  }, [page]);

  const fetchPackages = async () => {
    try {
      setLoading(true);
      const response = await packageService.getAllPackages(page, 12);
      setPackages(response.packages || []);
    } catch (err) {
      error('Failed to load packages');
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!searchTerm.trim()) {
      fetchPackages();
      return;
    }
    try {
      const response = await packageService.searchPackages(searchTerm);
      setPackages(response.packages || []);
    } catch (err) {
      error('Failed to search packages');
    }
  };

  const handleBook = (packageId) => {
    // Navigate to booking page
    window.location.href = `/packages/${packageId}`;
  };

  if (loading) return <Loader />;

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-8">Travel Packages</h1>

      {/* Search Bar */}
      <form onSubmit={handleSearch} className="max-w-md mx-auto mb-12">
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Search packages..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:border-primary"
          />
          <button type="submit" className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition">
            Search
          </button>
        </div>
      </form>

      {/* Packages Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {packages.length > 0 ? (
          packages.map((pkg) => <PackageCard key={pkg.id} pkg={pkg} onBook={handleBook} />)
        ) : (
          <div className="col-span-full text-center py-8 text-gray-500">No packages found</div>
        )}
      </div>

      {/* Pagination */}
      <div className="flex justify-center gap-4">
        <button
          onClick={() => setPage(Math.max(1, page - 1))}
          disabled={page === 1}
          className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-blue-600 disabled:opacity-50"
        >
          Previous
        </button>
        <span className="px-4 py-2">Page {page}</span>
        <button
          onClick={() => setPage(page + 1)}
          className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-blue-600"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Packages;
