import axios from 'axios';

export const http = axios.create({
  headers: { 'Content-Type': 'application/json' },
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

// http.interceptors.request.use(
//   async function (config) {
//     const token = await getToken();
//     if (token) {
//       config.headers.Authorization = `Bearer ${token}`;
//     }
//     config.headers['Content-Type'] = 'application/json';
//     return config;
//   },
//   function (error) {
//     return Promise.reject(error);
//   },
// );
