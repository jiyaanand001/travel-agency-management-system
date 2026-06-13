const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');
const { createBooking, getBookingById, getMyBookings, getAllBookings, updateBookingStatus, cancelBooking } = require('../controllers/bookingController');

router.post('/', authMiddleware, createBooking);
router.get('/my-bookings', authMiddleware, getMyBookings);
router.get('/:id', authMiddleware, getBookingById);
router.get('/', authMiddleware, getAllBookings);
router.put('/:bookingId/status', authMiddleware, updateBookingStatus);
router.put('/:id/cancel', authMiddleware, cancelBooking);

module.exports = router;
