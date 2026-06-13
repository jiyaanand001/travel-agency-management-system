const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');
const roleMiddleware = require('../middleware/roleMiddleware');
const { getDashboardStats, getPopularDestinations, getRevenueStats } = require('../controllers/dashboardController');

router.get('/stats', authMiddleware, roleMiddleware(['admin', 'super_admin']), getDashboardStats);
router.get('/popular-destinations', authMiddleware, roleMiddleware(['admin', 'super_admin']), getPopularDestinations);
router.get('/revenue-stats', authMiddleware, roleMiddleware(['admin', 'super_admin']), getRevenueStats);

module.exports = router;
