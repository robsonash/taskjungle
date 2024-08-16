import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UserModule } from '../user/user.module';
import { JwtModule } from '@nestjs/jwt';
@Module({
  imports: [UserModule, JwtModule.register({
    secret: 'your_secret_key', // Substitua pela sua chave secreta
    signOptions: { expiresIn: '60m' }, // Define o tempo de expiração do token
  })],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
