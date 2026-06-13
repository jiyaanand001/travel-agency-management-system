const db = require('../config/database');
const { hashPassword, comparePassword } = require('../utils/hashPassword');

class User {
  static create(userData, callback) {
    const { name, email, phone, password, address, role = 'customer' } = userData;
    
    hashPassword(password, (err, hash) => {
      if (err) return callback(err);
      
      const query = 'INSERT INTO users (name, email, phone, password, address, role, created_at) VALUES (?, ?, ?, ?, ?, ?, NOW())';
      db.query(query, [name, email, phone, hash, address, role], callback);
    });
  }

  static findByEmail(email, callback) {
    const query = 'SELECT * FROM users WHERE email = ?';
    db.query(query, [email], callback);
  }

  static findById(id, callback) {
    const query = 'SELECT id, name, email, phone, address, role, profile_picture, created_at FROM users WHERE id = ?';
    db.query(query, [id], callback);
  }

  static findAll(page = 1, limit = 10, callback) {
    const offset = (page - 1) * limit;
    const query = 'SELECT id, name, email, phone, address, role, profile_picture, created_at FROM users LIMIT ? OFFSET ?';
    db.query(query, [limit, offset], callback);
  }

  static update(id, userData, callback) {
    const { name, email, phone, address } = userData;
    const query = 'UPDATE users SET name = ?, email = ?, phone = ?, address = ?, updated_at = NOW() WHERE id = ?';
    db.query(query, [name, email, phone, address, id], callback);
  }

  static updatePassword(id, newPassword, callback) {
    hashPassword(newPassword, (err, hash) => {
      if (err) return callback(err);
      const query = 'UPDATE users SET password = ?, updated_at = NOW() WHERE id = ?';
      db.query(query, [hash, id], callback);
    });
  }

  static updateProfilePicture(id, profilePicture, callback) {
    const query = 'UPDATE users SET profile_picture = ?, updated_at = NOW() WHERE id = ?';
    db.query(query, [profilePicture, id], callback);
  }

  static delete(id, callback) {
    const query = 'DELETE FROM users WHERE id = ?';
    db.query(query, [id], callback);
  }
}

module.exports = User;
