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
function removeCookie(name: string): void {
  document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
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

// Interceptador para lidar com respostas
api.interceptors.response.use(
  (response) => {
    // Retorna a resposta diretamente se não houver erro
    return response;
  },
  (error) => {
    if (error.response && error.response.status === 401) {
      // Se a resposta for um erro de autenticação (401), remove o cookie e redireciona para a tela de login
      removeCookie("token");
      if (typeof window !== "undefined") {
        window.location.href = "/login"; // Substitua "/login" pela rota correta
      }
    }
    return Promise.reject(error);
  }
);
export default api;