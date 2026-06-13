import apiClient from './apiClient';

const destinationService = {
  getAllDestinations: async (page = 1, limit = 10) => {
    const response = await apiClient.get(`/destinations?page=${page}&limit=${limit}`);
    return response.data;
  },

  getDestinationById: async (id) => {
    const response = await apiClient.get(`/destinations/${id}`);
    return response.data;
  },

  searchDestinations: async (searchTerm) => {
    const response = await apiClient.get(`/destinations/search?search=${searchTerm}`);
    return response.data;
  },

  createDestination: async (data) => {
    const response = await apiClient.post('/destinations', data, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });
    return response.data;
  },

  updateDestination: async (id, data) => {
    const response = await apiClient.put(`/destinations/${id}`, data, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });
    return response.data;
  },

  deleteDestination: async (id) => {
    const response = await apiClient.delete(`/destinations/${id}`);
    return response.data;
  },
};

export default destinationService;
