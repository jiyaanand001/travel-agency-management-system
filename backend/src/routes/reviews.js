const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');
const { createReview, getReviewById, getPackageReviews, getUserReviews, getAllReviews, deleteReview, getPackageRating } = require('../controllers/reviewController');

router.post('/', authMiddleware, createReview);
router.get('/package/:packageId', getPackageReviews);
router.get('/package/:packageId/rating', getPackageRating);
router.get('/user/my-reviews', authMiddleware, getUserReviews);
router.get('/:id', getReviewById);
router.get('/', getAllReviews);
router.delete('/:id', authMiddleware, deleteReview);

module.exports = router;
