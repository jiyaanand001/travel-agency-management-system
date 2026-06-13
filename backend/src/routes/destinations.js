const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');
const roleMiddleware = require('../middleware/roleMiddleware');
const { createDestination, getDestinationById, getAllDestinations, searchDestinations, updateDestination, deleteDestination } = require('../controllers/destinationController');

router.post('/', authMiddleware, roleMiddleware(['admin', 'super_admin']), createDestination);
router.get('/search', searchDestinations);
router.get('/', getAllDestinations);
router.get('/:id', getDestinationById);
router.put('/:id', authMiddleware, roleMiddleware(['admin', 'super_admin']), updateDestination);
router.delete('/:id', authMiddleware, roleMiddleware(['admin', 'super_admin']), deleteDestination);

module.exports = router;
