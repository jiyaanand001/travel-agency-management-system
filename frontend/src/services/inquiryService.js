import apiClient from './apiClient';

const inquiryService = {
  createInquiry: async (data) => {
    const response = await apiClient.post('/inquiries', data);
    return response.data;
  },

  getInquiries: async (page = 1, limit = 10) => {
    const response = await apiClient.get(`/inquiries?page=${page}&limit=${limit}`);
    return response.data;
  },

  getInquiryById: async (id) => {
    const response = await apiClient.get(`/inquiries/${id}`);
    return response.data;
  },

  updateInquiryStatus: async (id, status) => {
    const response = await apiClient.put(`/inquiries/${id}/status`, { status });
    return response.data;
  },

  deleteInquiry: async (id) => {
    const response = await apiClient.delete(`/inquiries/${id}`);
    return response.data;
  },
};

export default inquiryService;
