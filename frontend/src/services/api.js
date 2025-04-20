import axios from "axios";

const baseURL = 'http://localhost:3001';

export const apiPublic = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  }
});

const api = axios.create({ baseURL });

api.interceptors.request.use(config => {
  const storedUser = localStorage.getItem("solidarizze:userData");

  if (storedUser) {
    const parsed = JSON.parse(storedUser);
    const token = parsed?.user?.token;

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
  }

  return config;
});



export default api;