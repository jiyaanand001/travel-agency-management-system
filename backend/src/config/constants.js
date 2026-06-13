module.exports = {
  // User Roles
  ROLES: {
    CUSTOMER: 'customer',
    ADMIN: 'admin',
    SUPER_ADMIN: 'super_admin'
  },

  // Booking Status
  BOOKING_STATUS: {
    PENDING: 'pending',
    CONFIRMED: 'confirmed',
    CANCELLED: 'cancelled',
    COMPLETED: 'completed'
  },

  // HTTP Status Codes
  HTTP_STATUS: {
    OK: 200,
    CREATED: 201,
    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
    FORBIDDEN: 403,
    NOT_FOUND: 404,
    CONFLICT: 409,
    INTERNAL_ERROR: 500
  },

  // Pagination
  PAGINATION: {
    DEFAULT_PAGE: 1,
    DEFAULT_LIMIT: 10,
    MAX_LIMIT: 100
  },

  // JWT
  JWT: {
    EXPIRATION: process.env.JWT_EXPIRE || '7d'
  },

  // File Upload
  FILE_UPLOAD: {
    ALLOWED_TYPES: ['image/jpeg', 'image/png', 'image/gif', 'image/webp'],
    MAX_SIZE: parseInt(process.env.MAX_FILE_SIZE) || 5 * 1024 * 1024
  },

  // Messages
  MESSAGES: {
    SUCCESS: 'Operation successful',
    ERROR: 'An error occurred',
    UNAUTHORIZED: 'Unauthorized access',
    NOT_FOUND: 'Resource not found',
    VALIDATION_ERROR: 'Validation error',
    ALREADY_EXISTS: 'Resource already exists',
    DELETED: 'Resource deleted successfully'
  }
};
