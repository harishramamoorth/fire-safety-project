import api from './api';

const newsletterService = {
  subscribe: async (email) => {
    const response = await api.post('/subscribers', { email });
    return response;
  },

  unsubscribe: async (email) => {
    const response = await api.delete(`/subscribers/${email}`);
    return response;
  },

  getAllSubscribers: async () => {
    const response = await api.get('/subscribers');
    return response.data;
  }
};

export default newsletterService;