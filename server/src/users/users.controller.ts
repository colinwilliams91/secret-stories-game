import { Controller, Get, Param } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get('users')
  findAll() {
    return 'This action returns all users';
  }

  @Get(':name')
  findOne(@Param('name') name: string) {
    return `This action returns user: ${name}`;
  }
}
