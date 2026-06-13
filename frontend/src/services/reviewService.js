import apiClient from './apiClient';

const reviewService = {
  createReview: async (data) => {
    const response = await apiClient.post('/reviews', data);
    return response.data;
  },

  getPackageReviews: async (packageId) => {
    const response = await apiClient.get(`/reviews/package/${packageId}`);
    return response.data;
  },

  getPackageRating: async (packageId) => {
    const response = await apiClient.get(`/reviews/package/${packageId}/rating`);
    return response.data;
  },

  getMyReviews: async () => {
    const response = await apiClient.get('/reviews/user/my-reviews');
    return response.data;
  },

  deleteReview: async (id) => {
    const response = await apiClient.delete(`/reviews/${id}`);
    return response.data;
  },
};

export default reviewService;
