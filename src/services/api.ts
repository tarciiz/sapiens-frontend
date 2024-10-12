import axios from "axios";

const BASE_URL = "https://sapiens-backend-5es9.onrender.com/api/";

export const api = axios.create({
  baseURL: BASE_URL,
});

api.interceptors.request.use((config) => {
  const user = localStorage.getItem("user");

  if (user) {
    const { token } = JSON.parse(user);
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});
