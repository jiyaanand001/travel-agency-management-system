const User = require('../models/User');
const Package = require('../models/Package');
const Booking = require('../models/Booking');
const Destination = require('../models/Destination');

const getAllUsers = (req, res) => {
  const page = req.query.page || 1;
  const limit = req.query.limit || 10;

  User.findAll(page, limit, (err, results) => {
    if (err) return res.status(500).json({ success: false, message: 'Database error', error: err });

    res.status(200).json({ success: true, users: results });
  });
};

const deleteUser = (req, res) => {
  const userId = req.params.id;

  User.delete(userId, (err, result) => {
    if (err) return res.status(500).json({ success: false, message: 'Error deleting user', error: err });

    res.status(200).json({ success: true, message: 'User deleted successfully' });
  });
};

const getAllBookings = (req, res) => {
  const page = req.query.page || 1;
  const limit = req.query.limit || 10;

  Booking.findAll(page, limit, (err, results) => {
    if (err) return res.status(500).json({ success: false, message: 'Database error', error: err });

    res.status(200).json({ success: true, bookings: results });
  });
};

const updateBookingStatus = (req, res) => {
  const bookingId = req.params.id;
  const { status } = req.body;

  const validStatuses = ['pending', 'confirmed', 'cancelled', 'completed'];
  if (!validStatuses.includes(status)) {
    return res.status(400).json({ success: false, message: 'Invalid status' });
  }

  Booking.updateStatus(bookingId, status, (err, result) => {
    if (err) return res.status(500).json({ success: false, message: 'Error updating booking', error: err });

    res.status(200).json({ success: true, message: 'Booking status updated successfully' });
  });
};

const getAllDestinations = (req, res) => {
  const page = req.query.page || 1;
  const limit = req.query.limit || 10;

  Destination.findAll(page, limit, (err, results) => {
    if (err) return res.status(500).json({ success: false, message: 'Database error', error: err });

    res.status(200).json({ success: true, destinations: results });
  });
};

module.exports = { getAllUsers, deleteUser, getAllBookings, updateBookingStatus, getAllDestinations };
