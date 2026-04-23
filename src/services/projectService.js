import api from './api';

export const projectService = {
  getAllProjects: async () => {
    const response = await api.get('/projects');
    return response.data;
  },

  getFeaturedProjects: async () => {
    const response = await api.get('/projects/featured');
    return response.data;
  },

  getProjectById: async (id) => {
    const response = await api.get(`/projects/${id}`);
    return response.data;
  }
};