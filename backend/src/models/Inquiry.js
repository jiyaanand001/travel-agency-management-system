const db = require('../config/database');

class Inquiry {
  static create(inquiryData, callback) {
    const { name, email, subject, message } = inquiryData;
    const query = 'INSERT INTO inquiries (name, email, subject, message, status, created_at) VALUES (?, ?, ?, ?, "pending", NOW())';
    db.query(query, [name, email, subject, message], callback);
  }

  static findById(id, callback) {
    const query = 'SELECT * FROM inquiries WHERE id = ?';
    db.query(query, [id], callback);
  }

  static findAll(page = 1, limit = 10, callback) {
    const offset = (page - 1) * limit;
    const query = 'SELECT * FROM inquiries ORDER BY created_at DESC LIMIT ? OFFSET ?';
    db.query(query, [limit, offset], callback);
  }

  static updateStatus(id, status, callback) {
    const query = 'UPDATE inquiries SET status = ?, updated_at = NOW() WHERE id = ?';
    db.query(query, [status, id], callback);
  }

  static delete(id, callback) {
    const query = 'DELETE FROM inquiries WHERE id = ?';
    db.query(query, [id], callback);
  }
}

module.exports = Inquiry;
