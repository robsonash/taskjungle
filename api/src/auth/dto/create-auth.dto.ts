import { IsEmail, IsNotEmpty, IsString, Matches } from 'class-validator';

export class CreateAuthDto {
    @IsEmail()
    email: string
    @IsNotEmpty()	
    password: string
}