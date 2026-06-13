const db = require('../config/database');

class Destination {
  static create(destinationData, callback) {
    const { country, state, city, description, tourist_attractions, image } = destinationData;
    const query = 'INSERT INTO destinations (country, state, city, description, tourist_attractions, image, created_at) VALUES (?, ?, ?, ?, ?, ?, NOW())';
    db.query(query, [country, state, city, description, tourist_attractions, image], callback);
  }

  static findById(id, callback) {
    const query = 'SELECT * FROM destinations WHERE id = ?';
    db.query(query, [id], callback);
  }

  static findAll(page = 1, limit = 10, callback) {
    const offset = (page - 1) * limit;
    const query = 'SELECT * FROM destinations LIMIT ? OFFSET ?';
    db.query(query, [limit, offset], callback);
  }

  static search(searchTerm, callback) {
    const query = 'SELECT * FROM destinations WHERE country LIKE ? OR city LIKE ? OR state LIKE ?';
    const searchPattern = `%${searchTerm}%`;
    db.query(query, [searchPattern, searchPattern, searchPattern], callback);
  }

  static update(id, destinationData, callback) {
    const { country, state, city, description, tourist_attractions, image } = destinationData;
    const query = 'UPDATE destinations SET country = ?, state = ?, city = ?, description = ?, tourist_attractions = ?, image = ?, updated_at = NOW() WHERE id = ?';
    db.query(query, [country, state, city, description, tourist_attractions, image, id], callback);
  }

  static delete(id, callback) {
    const query = 'DELETE FROM destinations WHERE id = ?';
    db.query(query, [id], callback);
  }
}

module.exports = Destination;
