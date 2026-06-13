const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');
const roleMiddleware = require('../middleware/roleMiddleware');
const { createPackage, getPackageById, getAllPackages, searchPackages, filterPackages, updatePackage, deletePackage } = require('../controllers/packageController');

router.post('/', authMiddleware, roleMiddleware(['admin', 'super_admin']), createPackage);
router.get('/search', searchPackages);
router.get('/filter', filterPackages);
router.get('/', getAllPackages);
router.get('/:id', getPackageById);
router.put('/:id', authMiddleware, roleMiddleware(['admin', 'super_admin']), updatePackage);
router.delete('/:id', authMiddleware, roleMiddleware(['admin', 'super_admin']), deletePackage);

module.exports = router;
