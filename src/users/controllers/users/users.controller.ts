import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
  // ParseBoolPipe,
  ParseIntPipe,
  Post,
  // Query,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateUserDto } from 'src/users/dtos/CreateUser.dto';
import { UsersService } from 'src/users/services/users/users.service';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}
  @Get()
  getUsers() {
    return this.usersService.fetchUsers();
  }
  // getUsers(@Query('sortDesc', ParseBoolPipe) sortDesc: boolean) {
  //   console.log(sortDesc);
  //   return this.usersService.fetchUsers();
  // }

  @Get('posts')
  getUsersPosts() {
    return [
      {
        username: 'Ali',
        email: 'ali@gmail.com',
        posts: [
          { id: 1, title: 'Post 1' },
          { id: 1, title: 'Post 2' },
        ],
      },
    ];
  }

  @Get('posts/comments')
  getUsersPostsComments() {
    return [
      {
        id: 1,
        title: 'Post 1',
        comments: [
          { id: 1, comment: 'Comment 1' },
          { id: 2, comment: 'Comment 2' },
        ],
      },
    ];
  }

  @Post('create')
  @UsePipes(new ValidationPipe())
  createUser(@Body() userData: CreateUserDto) {
    console.log(userData);
    return this.usersService.createUser(userData);
  }

  @Get(':id')
  getUserById(@Param('id', ParseIntPipe) id: number) {
    const user = this.usersService.fetchUserById(id);
    if (!user) {
      throw new HttpException('User not found', HttpStatus.BAD_REQUEST);
    }
    return user;
    // return this.usersService.fetchUserById(id);
    // console.log(id);
    // return { id };
  }
}
