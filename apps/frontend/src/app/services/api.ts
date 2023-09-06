import Axios from 'axios';

const api = Axios.create({
  baseURL: 'http://localhost:3000/api',
});

api.interceptors.request.use(
  async (config: any) => {
    config.headers = {
      ...config.headers,
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: 'Bearer ' + localStorage.getItem('accessToken'),
    };
    return config;
  },
  (error: any) => Promise.reject(error)
);

export default api;
