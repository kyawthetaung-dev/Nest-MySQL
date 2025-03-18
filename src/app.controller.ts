import { Controller, Get, Post, Body, Patch, Param, Delete, Headers, Put, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { CreateTodoDto } from './todo/dto/create-todo.dto';
import { UpdateTodoDto } from './todo/dto/update-todo.dto';
@Controller()
export class AppController {
  constructor(private readonly userService: AppService) {}

  @Get('users')
  async getAllUsersRaw() {
    return await this.userService.getAllUsersRaw();
  }
  @Get('persons')
  async getAllPerson(@Param('id') id: string) {
    return await this.userService.getAllPerson(id);
  }
}