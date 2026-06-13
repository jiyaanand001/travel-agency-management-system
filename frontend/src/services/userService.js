import apiClient from './apiClient';

const userService = {
  getProfile: async () => {
    const response = await apiClient.get('/users/profile');
    return response.data;
  },

  updateProfile: async (data) => {
    const response = await apiClient.put('/users/profile', data);
    return response.data;
  },

  changePassword: async (currentPassword, newPassword, confirmPassword) => {
    const response = await apiClient.post('/users/change-password', {
      currentPassword,
      newPassword,
      confirmPassword,
    });
    return response.data;
  },

  getBookingHistory: async (page = 1, limit = 10) => {
    const response = await apiClient.get(`/users/bookings?page=${page}&limit=${limit}`);
    return response.data;
  },
};

export default userService;
