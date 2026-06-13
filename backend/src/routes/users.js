const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');
const { getProfile, updateProfile, changePassword, getBookingHistory, getAllUsers, deleteUser } = require('../controllers/userController');

router.get('/profile', authMiddleware, getProfile);
router.put('/profile', authMiddleware, updateProfile);
router.post('/change-password', authMiddleware, changePassword);
router.get('/bookings', authMiddleware, getBookingHistory);
router.get('/all', authMiddleware, getAllUsers);
router.delete('/:id', authMiddleware, deleteUser);

module.exports = router;
