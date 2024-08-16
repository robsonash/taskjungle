import { IsEmail, IsNotEmpty, IsString, Matches } from 'class-validator';

export class UserResponseDto {
    _id: string;
    name: string;
    email: string;
    password: string;
}