// utils/api.js
import axios from 'axios';

const api = axios.create({
  baseURL: "https://aayu-backend-9ghq.onrender.com/api" || 'http://localhost:4000/api', // ✅ backend URL
  withCredentials: true, // ✅ allows sending & receiving cookies
});

export default api;
