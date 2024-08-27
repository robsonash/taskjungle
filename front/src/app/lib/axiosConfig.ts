import axios from "axios";

// Função para obter o token dos cookies (caso exista)
function getCookie(name: string): string | undefined {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) {
    return parts.pop()?.split(';').shift();
  }
  return undefined;
}

// Obter o token dos cookies (se existir)
const token = typeof window !== "undefined" ? getCookie("token") : null;

const api = axios.create({
  baseURL: "http://localhost:3001",
});

// Adicionar o token no cabeçalho Authorization se ele existir
if (token) {
  api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
}

// Interceptador para adicionar o token nas requisições
api.interceptors.request.use((config) => {

  const newToken = typeof window !== "undefined" ? getCookie("token") : null;

  if (newToken) {
    config.headers["Authorization"] = `Bearer ${newToken}`;

  }
  return config;
});

export default api;