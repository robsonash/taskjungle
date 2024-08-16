import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
@Injectable()
export class AuthService {
  constructor(
    private usersService: UserService,    
    private jwtService: JwtService) {}

  async signIn(
    email: string, 
    pass: string
  ): Promise<{ access_token: string }> {
    const user = await this.usersService.findByEmail(email);

    // Verifica se o usuário existe e se a senha está correta
    if (!user || !(await bcrypt.compare(pass, user.password))) {
      throw new UnauthorizedException();
    }

    const payload = { sub: user.id };

    // Gera e retorna o token JWT
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}
