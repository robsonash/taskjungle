import { IsEmail, IsNotEmpty, IsString, Matches } from 'class-validator';

export class CreateUserDto {
    @IsNotEmpty()
    name: string
    @IsEmail()
    email: string
    @IsString()
    password: string
}
