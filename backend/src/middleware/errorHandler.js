const errorHandler = (err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || 'Internal Server Error';
  
  console.error(`[${new Date().toISOString()}] Error:`, err);
  
  res.status(status).json({
    success: false,
    message,
    error: process.env.NODE_ENV === 'development' ? err : {}
  });
};

module.exports = errorHandler;
