export const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

export const BOOKING_STATUS = {
  PENDING: 'pending',
  CONFIRMED: 'confirmed',
  CANCELLED: 'cancelled',
  COMPLETED: 'completed',
};

export const USER_ROLES = {
  CUSTOMER: 'customer',
  ADMIN: 'admin',
  SUPER_ADMIN: 'super_admin',
};

export const INQUIRY_STATUS = {
  PENDING: 'pending',
  RESOLVED: 'resolved',
  CLOSED: 'closed',
};

export const ROUTES = {
  HOME: '/',
  ABOUT: '/about',
  CONTACT: '/contact',
  PACKAGES: '/packages',
  PACKAGE_DETAIL: '/packages/:id',
  LOGIN: '/login',
  REGISTER: '/register',
  FORGOT_PASSWORD: '/forgot-password',
  CUSTOMER_DASHBOARD: '/customer/dashboard',
  MY_BOOKINGS: '/customer/bookings',
  MY_PROFILE: '/customer/profile',
  MY_REVIEWS: '/customer/reviews',
  ADMIN_DASHBOARD: '/admin/dashboard',
  MANAGE_PACKAGES: '/admin/packages',
  MANAGE_USERS: '/admin/users',
  MANAGE_BOOKINGS: '/admin/bookings',
  MANAGE_DESTINATIONS: '/admin/destinations',
  MANAGE_INQUIRIES: '/admin/inquiries',
  REPORTS: '/admin/reports',
};
