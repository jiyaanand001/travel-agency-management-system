const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');
const roleMiddleware = require('../middleware/roleMiddleware');
const { createInquiry, getInquiryById, getAllInquiries, updateInquiryStatus, deleteInquiry } = require('../controllers/inquiryController');

router.post('/', createInquiry);
router.get('/:id', authMiddleware, roleMiddleware(['admin', 'super_admin']), getInquiryById);
router.get('/', authMiddleware, roleMiddleware(['admin', 'super_admin']), getAllInquiries);
router.put('/:id/status', authMiddleware, roleMiddleware(['admin', 'super_admin']), updateInquiryStatus);
router.delete('/:id', authMiddleware, roleMiddleware(['admin', 'super_admin']), deleteInquiry);

module.exports = router;
