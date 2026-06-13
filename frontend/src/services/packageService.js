import apiClient from './apiClient';

const packageService = {
  getAllPackages: async (page = 1, limit = 10) => {
    const response = await apiClient.get(`/packages?page=${page}&limit=${limit}`);
    return response.data;
  },

  getPackageById: async (id) => {
    const response = await apiClient.get(`/packages/${id}`);
    return response.data;
  },

  searchPackages: async (searchTerm) => {
    const response = await apiClient.get(`/packages/search?search=${searchTerm}`);
    return response.data;
  },

  filterPackages: async (destination_id, minPrice, maxPrice) => {
    const response = await apiClient.get(
      `/packages/filter?destination_id=${destination_id}&minPrice=${minPrice}&maxPrice=${maxPrice}`
    );
    return response.data;
  },

  createPackage: async (data) => {
    const response = await apiClient.post('/packages', data, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });
    return response.data;
  },

  updatePackage: async (id, data) => {
    const response = await apiClient.put(`/packages/${id}`, data, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });
    return response.data;
  },

  deletePackage: async (id) => {
    const response = await apiClient.delete(`/packages/${id}`);
    return response.data;
  },
};

export default packageService;
