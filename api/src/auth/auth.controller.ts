import { 
  Controller, 
  Get, 
  Post, 
  Body, 
  Patch, 
  Param,
  Delete, 
  HttpCode, 
  HttpStatus, 
  Request,
  UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateAuthDto } from './dto/create-auth.dto';
import { AuthGuard } from './auth.guard';


@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @Post('login')
  signIn(@Body() CreateAuthDto: CreateAuthDto) {
    return this.authService.signIn(CreateAuthDto.email, CreateAuthDto.password);
  }
  
  @UseGuards(AuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }
}
