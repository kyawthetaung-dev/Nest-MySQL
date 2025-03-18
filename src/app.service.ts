import { Injectable, NotFoundException } from '@nestjs/common';

import { CreateTodoDto } from './todo/dto/create-todo.dto';
import { UpdateTodoDto } from './todo/dto/update-todo.dto';
import { Todo } from './todo/entities/todo.entity';
import { User } from './todo/entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
@Injectable()
export class AppService {
  constructor( 
    @InjectRepository(User)
    private readonly dataSource: Repository<User>) {}
    async getAllUsersRaw(): Promise<User[]> {
      return await this.dataSource.query(`SELECT * FROM tbl_user`);
    }
    async getAllPerson(id: string): Promise<{ full_name: string }[]> {
      return await this.dataSource.query(
        // `SELECT full_name FROM tbl_person WHERE id = ?`,[id]
        `SELECT full_name,qualification FROM tbl_person`,
      );
    }
 }
