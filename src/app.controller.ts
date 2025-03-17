import { Controller, Get, Post, Body, Patch, Param, Delete, Headers, Put, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { CreateTodoDto } from './todo/dto/create-todo.dto';
import { UpdateTodoDto } from './todo/dto/update-todo.dto';
@Controller('users')
export class AppController {
  constructor(private readonly userService: AppService) {}

  @Get('raw')
  async getAllUsersRaw() {
    return await this.userService.getAllUsersRaw();
  }
}