import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './entities/user.entity';
import * as bcrypt from 'bcrypt';
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

  async findByEmail(email: string): Promise<User> {
    const user = await this.UserModel.findOne({ email }).exec();
    if (!user) {
      return null;
    }
  
    // Mapeia o usuário para o DTO de resposta
    const userResponse: User = {
      id: user._id.toString(), // Converte o ObjectId para string
      name: user.name,
      email: user.email,
      password: user.password, 
    };
  
    return userResponse;
  }
  
  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
