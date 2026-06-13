const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');
const roleMiddleware = require('../middleware/roleMiddleware');
const { getAllUsers, deleteUser, getAllBookings, updateBookingStatus, getAllDestinations } = require('../controllers/adminController');

router.get('/users', authMiddleware, roleMiddleware(['admin', 'super_admin']), getAllUsers);
router.delete('/users/:id', authMiddleware, roleMiddleware(['admin', 'super_admin']), deleteUser);
router.get('/bookings', authMiddleware, roleMiddleware(['admin', 'super_admin']), getAllBookings);
router.put('/bookings/:id/status', authMiddleware, roleMiddleware(['admin', 'super_admin']), updateBookingStatus);
router.get('/destinations', authMiddleware, roleMiddleware(['admin', 'super_admin']), getAllDestinations);

module.exports = router;
