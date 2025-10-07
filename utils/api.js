// utils/api.js
import axios from 'axios';

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:4000/api', // ✅ backend URL
  withCredentials: true, // ✅ allows sending & receiving cookies

});

export default api;
