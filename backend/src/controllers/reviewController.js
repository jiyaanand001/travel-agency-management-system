const Review = require('../models/Review');

const createReview = (req, res) => {
  const { package_id, rating, comment } = req.body;
  const user_id = req.user.id;

  if (!package_id || !rating || !comment) {
    return res.status(400).json({ success: false, message: 'Package ID, rating, and comment are required' });
  }

  if (rating < 1 || rating > 5) {
    return res.status(400).json({ success: false, message: 'Rating must be between 1 and 5' });
  }

  Review.create({ user_id, package_id, rating, comment }, (err, result) => {
    if (err) return res.status(500).json({ success: false, message: 'Error creating review', error: err });

    res.status(201).json({ success: true, message: 'Review created successfully', reviewId: result.insertId });
  });
};

const getReviewById = (req, res) => {
  const reviewId = req.params.id;

  Review.findById(reviewId, (err, results) => {
    if (err) return res.status(500).json({ success: false, message: 'Database error', error: err });
    if (results.length === 0) return res.status(404).json({ success: false, message: 'Review not found' });

    res.status(200).json({ success: true, review: results[0] });
  });
};

const getPackageReviews = (req, res) => {
  const packageId = req.params.packageId;

  Review.findByPackageId(packageId, (err, results) => {
    if (err) return res.status(500).json({ success: false, message: 'Database error', error: err });

    res.status(200).json({ success: true, reviews: results });
  });
};

const getUserReviews = (req, res) => {
  const userId = req.user.id;

  Review.findByUserId(userId, (err, results) => {
    if (err) return res.status(500).json({ success: false, message: 'Database error', error: err });

    res.status(200).json({ success: true, reviews: results });
  });
};

const getAllReviews = (req, res) => {
  const page = req.query.page || 1;
  const limit = req.query.limit || 10;

  Review.findAll(page, limit, (err, results) => {
    if (err) return res.status(500).json({ success: false, message: 'Database error', error: err });

    res.status(200).json({ success: true, reviews: results });
  });
};

const deleteReview = (req, res) => {
  const reviewId = req.params.id;

  Review.delete(reviewId, (err, result) => {
    if (err) return res.status(500).json({ success: false, message: 'Error deleting review', error: err });

    res.status(200).json({ success: true, message: 'Review deleted successfully' });
  });
};

const getPackageRating = (req, res) => {
  const packageId = req.params.packageId;

  Review.getAverageRating(packageId, (err, results) => {
    if (err) return res.status(500).json({ success: false, message: 'Database error', error: err });

    res.status(200).json({
      success: true,
      averageRating: results[0].average_rating || 0,
      totalReviews: results[0].total_reviews || 0
    });
  });
};

module.exports = { createReview, getReviewById, getPackageReviews, getUserReviews, getAllReviews, deleteReview, getPackageRating };
