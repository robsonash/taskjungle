import { NextResponse, NextRequest } from 'next/server';

// Função de middleware
export function middleware(request: NextRequest) {
  // Recupera o token dos cookies
  const token = request.cookies.get('token');
  // Define as rotas protegidas
  const protectedRoutes = ['/tasks'];
  
  // Verifica se a rota é uma rota protegida e se o token não está presente
  if (protectedRoutes.includes(request.nextUrl.pathname) && !token) {
    // Redireciona para a página de login se o token não estiver presente
    return NextResponse.redirect(new URL('/login', request.url));
  }

  // Continua com a solicitação se o token estiver presente ou a rota não for protegida
  return NextResponse.next();
}

// Configura quais rotas o middleware deve ser aplicado
export const config = {
  matcher: ['/tasks'], // Adicione mais rotas conforme necessário
};