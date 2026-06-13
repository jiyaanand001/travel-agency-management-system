const db = require('../config/database');

class Package {
  static create(packageData, callback) {
    const { name, destination_id, description, duration, price, available_seats, travel_date, image, created_by } = packageData;
    const query = 'INSERT INTO packages (name, destination_id, description, duration, price, available_seats, travel_date, image, created_by, created_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, NOW())';
    db.query(query, [name, destination_id, description, duration, price, available_seats, travel_date, image, created_by], callback);
  }

  static findById(id, callback) {
    const query = `SELECT p.*, d.country, d.state, d.city, d.description as destination_description 
                   FROM packages p 
                   LEFT JOIN destinations d ON p.destination_id = d.id 
                   WHERE p.id = ?`;
    db.query(query, [id], callback);
  }

  static findAll(page = 1, limit = 10, callback) {
    const offset = (page - 1) * limit;
    const query = `SELECT p.*, d.country, d.state, d.city 
                   FROM packages p 
                   LEFT JOIN destinations d ON p.destination_id = d.id 
                   LIMIT ? OFFSET ?`;
    db.query(query, [limit, offset], callback);
  }

  static search(searchTerm, callback) {
    const query = `SELECT p.*, d.country, d.state, d.city 
                   FROM packages p 
                   LEFT JOIN destinations d ON p.destination_id = d.id 
                   WHERE p.name LIKE ? OR d.country LIKE ? OR d.city LIKE ?`;
    const searchPattern = `%${searchTerm}%`;
    db.query(query, [searchPattern, searchPattern, searchPattern], callback);
  }

  static filter(destination_id, minPrice, maxPrice, callback) {
    let query = 'SELECT * FROM packages WHERE 1=1';
    const params = [];
    
    if (destination_id) {
      query += ' AND destination_id = ?';
      params.push(destination_id);
    }
    if (minPrice) {
      query += ' AND price >= ?';
      params.push(minPrice);
    }
    if (maxPrice) {
      query += ' AND price <= ?';
      params.push(maxPrice);
    }
    
    db.query(query, params, callback);
  }

  static update(id, packageData, callback) {
    const { name, destination_id, description, duration, price, available_seats, travel_date, image } = packageData;
    const query = 'UPDATE packages SET name = ?, destination_id = ?, description = ?, duration = ?, price = ?, available_seats = ?, travel_date = ?, image = ?, updated_at = NOW() WHERE id = ?';
    db.query(query, [name, destination_id, description, duration, price, available_seats, travel_date, image, id], callback);
  }

  static delete(id, callback) {
    const query = 'DELETE FROM packages WHERE id = ?';
    db.query(query, [id], callback);
  }
}

module.exports = Package;
