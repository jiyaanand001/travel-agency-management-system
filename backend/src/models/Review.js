const db = require('../config/database');

class Review {
  static create(reviewData, callback) {
    const { user_id, package_id, rating, comment } = reviewData;
    const query = 'INSERT INTO reviews (user_id, package_id, rating, comment, created_at) VALUES (?, ?, ?, ?, NOW())';
    db.query(query, [user_id, package_id, rating, comment], callback);
  }

  static findById(id, callback) {
    const query = 'SELECT r.*, u.name as user_name, p.name as package_name FROM reviews r LEFT JOIN users u ON r.user_id = u.id LEFT JOIN packages p ON r.package_id = p.id WHERE r.id = ?';
    db.query(query, [id], callback);
  }

  static findByPackageId(package_id, callback) {
    const query = 'SELECT r.*, u.name as user_name FROM reviews r LEFT JOIN users u ON r.user_id = u.id WHERE r.package_id = ? ORDER BY r.created_at DESC';
    db.query(query, [package_id], callback);
  }

  static findByUserId(user_id, callback) {
    const query = 'SELECT r.*, p.name as package_name FROM reviews r LEFT JOIN packages p ON r.package_id = p.id WHERE r.user_id = ?';
    db.query(query, [user_id], callback);
  }

  static findAll(page = 1, limit = 10, callback) {
    const offset = (page - 1) * limit;
    const query = 'SELECT r.*, u.name as user_name, p.name as package_name FROM reviews r LEFT JOIN users u ON r.user_id = u.id LEFT JOIN packages p ON r.package_id = p.id ORDER BY r.created_at DESC LIMIT ? OFFSET ?';
    db.query(query, [limit, offset], callback);
  }

  static delete(id, callback) {
    const query = 'DELETE FROM reviews WHERE id = ?';
    db.query(query, [id], callback);
  }

  static getAverageRating(package_id, callback) {
    const query = 'SELECT AVG(rating) as average_rating, COUNT(*) as total_reviews FROM reviews WHERE package_id = ?';
    db.query(query, [package_id], callback);
  }
}

module.exports = Review;
