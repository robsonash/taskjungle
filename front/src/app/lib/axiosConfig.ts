import axios from "axios";

// Obter o token do localStorage (se existir)
const token = typeof window !== "undefined" ? localStorage.getItem("token") : null;

const api = axios.create({
  baseURL: "http://localhost:3001",
});

// Adicionar o token no cabeçalho Authorization se ele existir
if (token) {
  api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
}

// Interceptador para adicionar o token nas requisições
api.interceptors.request.use((config) => {
  const newToken = typeof window !== "undefined" ? localStorage.getItem("token") : null;
  if (newToken) {
    config.headers["Authorization"] = `Bearer ${newToken}`;
  }
  return config;
});

export default api;