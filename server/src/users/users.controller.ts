import { Body, Controller, Get, Param, Post, Res } from '@nestjs/common';
import { passport } from 'passport-local';
import { UsersService } from './users.service';
import { response } from 'express';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  findAll() {
    return 'This action returns all users';
  }

  @Get(':name')
  findOne(@Param('name') name: string) {
    return `This action returns user: ${name}`;
  }

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    console.log('post endpoint');
    return this.usersService.create(createUserDto);
  }

  @Post('login')
  loginExpress(@Res() response) {
    passport.authenticate('local', { failureRedirect: '/login' }),
      () => response.redirect('/');
  }
}
