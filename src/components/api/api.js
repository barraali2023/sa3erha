// src/api.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8080/api',   // adjust to your Spring Boot URL
});

// attach JWT automatically if stored in localStorage
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export default api;
