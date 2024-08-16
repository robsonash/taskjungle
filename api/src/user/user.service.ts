import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './entities/user.entity';
import * as bcrypt from 'bcrypt';
import { UserResponseDto } from './dto/user-response-dto';
@Injectable()
export class UserService {

  constructor(@InjectModel(User.name) private UserModel: Model<User>) {}

 async create(createUserDto: CreateUserDto) {
    createUserDto.password = await bcrypt.hash(createUserDto.password, 10);
    return this.UserModel.create(createUserDto);
  }

  findAll() {
    return this.UserModel.find();
  }

  findOne(id: string) {
    return this.UserModel.findById(id);
  }

  async findByEmail(email: string): Promise<UserResponseDto | null> {
    const user = await this.UserModel.findOne({ email }).exec();
    if (!user) {
      return null; // Ou você pode lançar uma exceção ou retornar um valor padrão
    }
  
    // Mapeia o usuário para o DTO de resposta
    const userResponseDto: UserResponseDto = {
      _id: user._id.toString(), // Converte o ObjectId para string
      name: user.name,
      email: user.email,
      password: user.password, // Inclua a senha se necessário
    };
  
    return userResponseDto;
  }
  
  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
