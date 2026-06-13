import apiClient from './apiClient';

const bookingService = {
  createBooking: async (data) => {
    const response = await apiClient.post('/bookings', data);
    return response.data;
  },

  getMyBookings: async (page = 1, limit = 10) => {
    const response = await apiClient.get(`/bookings/my-bookings?page=${page}&limit=${limit}`);
    return response.data;
  },

  getBookingById: async (id) => {
    const response = await apiClient.get(`/bookings/${id}`);
    return response.data;
  },

  cancelBooking: async (id) => {
    const response = await apiClient.put(`/bookings/${id}/cancel`);
    return response.data;
  },

  updateBookingStatus: async (bookingId, status) => {
    const response = await apiClient.put(`/bookings/${bookingId}/status`, { status });
    return response.data;
  },
};

export default bookingService;
