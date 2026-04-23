import api from './api';

export const testimonialService = {
  getAllTestimonials: async () => {
    const response = await api.get('/testimonials');
    return response.data;
  },

  getApprovedTestimonials: async () => {
    const response = await api.get('/testimonials?approved=true');
    return response.data;
  },

  getTestimonialById: async (id) => {
    const response = await api.get(`/testimonials/${id}`);
    return response.data;
  },

  createTestimonial: async (testimonialData) => {
    const response = await api.post('/testimonials', testimonialData);
    return response;
  },

  updateTestimonial: async (id, testimonialData) => {
    const response = await api.put(`/testimonials/${id}`, testimonialData);
    return response;
  },

  deleteTestimonial: async (id) => {
    const response = await api.delete(`/testimonials/${id}`);
    return response;
  }
};