import Axs from 'axios';

import useAuthStore from '@/store/useAuthStore';

const axios = Axs.create({
  baseURL: '/backend',
  headers: {
    'Content-Type': 'application/json',
  },
});

export const serverAxios = Axs.create({
  baseURL: process.env.NEXT_PUBLIC_UNSAFE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

axios.interceptors.request.use(
  (config) => {
    const token = useAuthStore.getState().token;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error),
);

axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response.status === 401) {
      alert('Sesi anda telah habis: Silakan Login Kembali');
      return (window.location.href = '/login');
    }
    return Promise.reject(error);
  },
);

export default axios;
