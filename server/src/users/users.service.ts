import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './entities/user.entity';
import { Model } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<User>,
  ) {}

  findAll() {
    return this.userModel.find().exec();
  }

  async findOne(name: string) {
    const user = await this.userModel.findOne({ name: name }).exec();
    if (!user) {
      throw new NotFoundException(`User ${name} not found`);
    }
    return user;
  }

  create(createCoffeeDto: CreateUserDto) {
    const coffee = new this.userModel(createCoffeeDto);
    return coffee.save();
  }

  async update(name: string, updateUserDto: UpdateUserDto) {
    const existingUser = await this.userModel
      .findOneAndUpdate({ name: name }, { $set: updateUserDto }, { new: true })
      .exec();

    if (!existingUser) {
      throw new NotFoundException(`User #${name} not found`);
    }
    return existingUser;
  }

  async remove(name: string) {
    const user = await this.findOne(name);
    return user.deleteOne();
  }
}
