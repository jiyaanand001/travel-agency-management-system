const Booking = require('../models/Booking');
const Package = require('../models/Package');
const { sendEmail } = require('../utils/emailService');

const createBooking = (req, res) => {
  const { package_id, travel_date, number_of_travelers } = req.body;
  const user_id = req.user.id;

  if (!package_id || !travel_date || !number_of_travelers) {
    return res.status(400).json({ success: false, message: 'Package ID, travel date, and number of travelers are required' });
  }

  Package.findById(package_id, (err, results) => {
    if (err) return res.status(500).json({ success: false, message: 'Database error', error: err });
    if (results.length === 0) return res.status(404).json({ success: false, message: 'Package not found' });

    const pkg = results[0];
    if (pkg.available_seats < number_of_travelers) {
      return res.status(400).json({ success: false, message: 'Not enough seats available' });
    }

    const total_price = pkg.price * number_of_travelers;

    Booking.create({ user_id, package_id, travel_date, number_of_travelers, total_price, status: 'pending' }, (err, result) => {
      if (err) return res.status(500).json({ success: false, message: 'Error creating booking', error: err });

      // Send confirmation email
      const htmlContent = `
        <h2>Booking Confirmation</h2>
        <p>Your booking has been created successfully!</p>
        <p><strong>Package:</strong> ${pkg.name}</p>
        <p><strong>Travelers:</strong> ${number_of_travelers}</p>
        <p><strong>Total Price:</strong> $${total_price}</p>
        <p>Status: Pending</p>
      `;
      
      sendEmail(req.user.email, 'Booking Confirmation', htmlContent);

      res.status(201).json({ success: true, message: 'Booking created successfully', bookingId: result.insertId });
    });
  });
};

const getBookingById = (req, res) => {
  const bookingId = req.params.id;

  Booking.findById(bookingId, (err, results) => {
    if (err) return res.status(500).json({ success: false, message: 'Database error', error: err });
    if (results.length === 0) return res.status(404).json({ success: false, message: 'Booking not found' });

    res.status(200).json({ success: true, booking: results[0] });
  });
};

const getMyBookings = (req, res) => {
  const userId = req.user.id;
  const page = req.query.page || 1;
  const limit = req.query.limit || 10;

  Booking.findByUserId(userId, page, limit, (err, results) => {
    if (err) return res.status(500).json({ success: false, message: 'Database error', error: err });

    res.status(200).json({ success: true, bookings: results });
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
  const { bookingId } = req.params;
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

const cancelBooking = (req, res) => {
  const bookingId = req.params.id;

  Booking.cancel(bookingId, (err, result) => {
    if (err) return res.status(500).json({ success: false, message: 'Error cancelling booking', error: err });

    res.status(200).json({ success: true, message: 'Booking cancelled successfully' });
  });
};

module.exports = { createBooking, getBookingById, getMyBookings, getAllBookings, updateBookingStatus, cancelBooking };
