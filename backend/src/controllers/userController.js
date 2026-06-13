const User = require('../models/User');
const Booking = require('../models/Booking');

const getProfile = (req, res) => {
  const userId = req.user.id;

  User.findById(userId, (err, results) => {
    if (err) return res.status(500).json({ success: false, message: 'Database error', error: err });
    
    if (results.length === 0) {
      return res.status(404).json({ success: false, message: 'User not found' });
    }

    res.status(200).json({ success: true, user: results[0] });
  });
};

const updateProfile = (req, res) => {
  const userId = req.user.id;
  const { name, email, phone, address } = req.body;

  if (!name || !email || !phone) {
    return res.status(400).json({ success: false, message: 'Name, email, and phone are required' });
  }

  User.update(userId, { name, email, phone, address }, (err, result) => {
    if (err) return res.status(500).json({ success: false, message: 'Error updating profile', error: err });

    res.status(200).json({ success: true, message: 'Profile updated successfully' });
  });
};

const changePassword = (req, res) => {
  const userId = req.user.id;
  const { currentPassword, newPassword, confirmPassword } = req.body;

  if (!currentPassword || !newPassword || !confirmPassword) {
    return res.status(400).json({ success: false, message: 'All password fields are required' });
  }

  if (newPassword !== confirmPassword) {
    return res.status(400).json({ success: false, message: 'New passwords do not match' });
  }

  User.findById(userId, (err, results) => {
    if (err) return res.status(500).json({ success: false, message: 'Database error', error: err });
    
    if (results.length === 0) {
      return res.status(404).json({ success: false, message: 'User not found' });
    }

    // Verify current password (implementation needed)
    User.updatePassword(userId, newPassword, (err, result) => {
      if (err) return res.status(500).json({ success: false, message: 'Error updating password', error: err });

      res.status(200).json({ success: true, message: 'Password changed successfully' });
    });
  });
};

const getBookingHistory = (req, res) => {
  const userId = req.user.id;
  const page = req.query.page || 1;
  const limit = req.query.limit || 10;

  Booking.findByUserId(userId, page, limit, (err, results) => {
    if (err) return res.status(500).json({ success: false, message: 'Database error', error: err });

    res.status(200).json({ success: true, bookings: results });
  });
};

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

module.exports = { getProfile, updateProfile, changePassword, getBookingHistory, getAllUsers, deleteUser };
