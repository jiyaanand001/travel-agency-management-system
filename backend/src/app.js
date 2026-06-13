const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:5173',
  credentials: true
}));

app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));

// Serve uploaded files
app.use('/uploads', express.static('uploads'));

// API Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/users', require('./routes/users'));
app.use('/api/packages', require('./routes/packages'));
app.use('/api/destinations', require('./routes/destinations'));
app.use('/api/bookings', require('./routes/bookings'));
app.use('/api/reviews', require('./routes/reviews'));
app.use('/api/inquiries', require('./routes/inquiries'));
app.use('/api/admin', require('./routes/admin'));
app.use('/api/dashboard', require('./routes/dashboard'));

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'Server is running', timestamp: new Date() });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ 
    success: false, 
    message: 'Route not found' 
  });
});

// Global error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  
  const status = err.status || 500;
  const message = err.message || 'Internal Server Error';
  
  res.status(status).json({ 
    success: false, 
    message,
    error: process.env.NODE_ENV === 'development' ? err : {}
  });
});

module.exports = app;
