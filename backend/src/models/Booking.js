const db = require('../config/database');

class Booking {
  static create(bookingData, callback) {
    const { user_id, package_id, travel_date, number_of_travelers, total_price, status = 'pending' } = bookingData;
    const query = 'INSERT INTO bookings (user_id, package_id, travel_date, number_of_travelers, total_price, status, created_at) VALUES (?, ?, ?, ?, ?, ?, NOW())';
    db.query(query, [user_id, package_id, travel_date, number_of_travelers, total_price, status], callback);
  }

  static findById(id, callback) {
    const query = `SELECT b.*, p.name as package_name, p.price, u.name as user_name, u.email 
                   FROM bookings b 
                   LEFT JOIN packages p ON b.package_id = p.id 
                   LEFT JOIN users u ON b.user_id = u.id 
                   WHERE b.id = ?`;
    db.query(query, [id], callback);
  }

  static findByUserId(user_id, page = 1, limit = 10, callback) {
    const offset = (page - 1) * limit;
    const query = `SELECT b.*, p.name as package_name, p.image, d.country, d.city 
                   FROM bookings b 
                   LEFT JOIN packages p ON b.package_id = p.id 
                   LEFT JOIN destinations d ON p.destination_id = d.id 
                   WHERE b.user_id = ? 
                   ORDER BY b.created_at DESC 
                   LIMIT ? OFFSET ?`;
    db.query(query, [user_id, limit, offset], callback);
  }

  static findAll(page = 1, limit = 10, callback) {
    const offset = (page - 1) * limit;
    const query = `SELECT b.*, p.name as package_name, u.name as user_name 
                   FROM bookings b 
                   LEFT JOIN packages p ON b.package_id = p.id 
                   LEFT JOIN users u ON b.user_id = u.id 
                   ORDER BY b.created_at DESC 
                   LIMIT ? OFFSET ?`;
    db.query(query, [limit, offset], callback);
  }

  static updateStatus(id, status, callback) {
    const query = 'UPDATE bookings SET status = ?, updated_at = NOW() WHERE id = ?';
    db.query(query, [status, id], callback);
  }

  static cancel(id, callback) {
    const query = 'UPDATE bookings SET status = "cancelled", updated_at = NOW() WHERE id = ?';
    db.query(query, [id], callback);
  }

  static getTotalRevenue(callback) {
    const query = 'SELECT SUM(total_price) as total_revenue FROM bookings WHERE status = "confirmed"';
    db.query(query, callback);
  }

  static getMonthlyStats(callback) {
    const query = `SELECT DATE_FORMAT(created_at, '%Y-%m') as month, COUNT(*) as bookings, SUM(total_price) as revenue 
                   FROM bookings 
                   WHERE status = "confirmed" 
                   GROUP BY DATE_FORMAT(created_at, '%Y-%m') 
                   ORDER BY month DESC 
                   LIMIT 12`;
    db.query(query, callback);
  }
}

module.exports = Booking;
