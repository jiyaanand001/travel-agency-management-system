const User = require('../models/User');
const Package = require('../models/Package');
const Booking = require('../models/Booking');
const Destination = require('../models/Destination');

const getDashboardStats = (req, res) => {
  let stats = {};

  // Get total users
  User.findAll(1, 1000, (err, users) => {
    if (!err) stats.totalUsers = users.length;

    // Get total packages
    Package.findAll(1, 1000, (err, packages) => {
      if (!err) stats.totalPackages = packages.length;

      // Get total bookings and revenue
      Booking.findAll(1, 1000, (err, bookings) => {
        if (!err) {
          stats.totalBookings = bookings.length;
          stats.totalRevenue = bookings.reduce((sum, b) => sum + (b.total_price || 0), 0);
        }

        // Get destinations count
        Destination.findAll(1, 1000, (err, destinations) => {
          if (!err) stats.totalDestinations = destinations.length;

          // Get monthly stats
          Booking.getMonthlyStats((err, monthlyStats) => {
            if (!err) stats.monthlyStats = monthlyStats;

            res.status(200).json({ success: true, stats });
          });
        });
      });
    });
  });
};

const getPopularDestinations = (req, res) => {
  Booking.findAll(1, 1000, (err, bookings) => {
    if (err) return res.status(500).json({ success: false, message: 'Database error', error: err });

    const destinationStats = {};
    bookings.forEach(booking => {
      const destination = booking.destination_city || 'Unknown';
      destinationStats[destination] = (destinationStats[destination] || 0) + 1;
    });

    const sortedDestinations = Object.entries(destinationStats)
      .sort(([, a], [, b]) => b - a)
      .slice(0, 5)
      .map(([destination, count]) => ({ destination, bookings: count }));

    res.status(200).json({ success: true, popularDestinations: sortedDestinations });
  });
};

const getRevenueStats = (req, res) => {
  Booking.getMonthlyStats((err, results) => {
    if (err) return res.status(500).json({ success: false, message: 'Database error', error: err });

    const revenueData = results.map(r => ({
      month: r.month,
      bookings: r.bookings,
      revenue: r.revenue
    }));

    res.status(200).json({ success: true, revenueStats: revenueData });
  });
};

module.exports = { getDashboardStats, getPopularDestinations, getRevenueStats };
