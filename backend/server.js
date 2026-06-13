const app = require('./src/app');
const db = require('./src/config/database');
require('dotenv').config();

const PORT = process.env.PORT || 5000;

// Test database connection
db.getConnection((err, connection) => {
  if (err) {
    console.error('Database connection failed:', err.message);
    process.exit(1);
  } else {
    connection.release();
    console.log('✅ Database connected successfully');
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
  console.log(`📚 API Documentation: http://localhost:${PORT}/api/docs`);
});

// Handle unhandled promise rejections
process.on('unhandledRejection', (err) => {
  console.error('Unhandled Rejection:', err);
  process.exit(1);
});
