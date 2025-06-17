// src/utils/axiosInstance.js
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL, // or process.env.REACT_APP_API_BASE_URL for CRA
  withCredentials: true, // to send cookies (e.g., token)
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
