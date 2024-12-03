import {
  Controller,
  Get,
  Post,
  Delete,
  Patch,
  Param,
  Body,
} from '@nestjs/common';
import { TodoService } from './todo.service';

@Controller('todos')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  // Todoの一覧を取得
  @Get()
  async getTodos() {
    return this.todoService.getTodos();
  }

  // 新しいTodoを追加
  @Post()
  async addTodo(@Body() body: { title: string }) {
    return this.todoService.addTodo(body.title);
  }

  // Todoを削除
  @Delete(':id')
  async deleteTodo(@Param('id') id: string) {
    return this.todoService.deleteTodo(Number(id));
  }

  // Todoのcompletedをtrueに更新
  @Patch(':id/complete')
  async completeTodo(@Param('id') id: string) {
    return this.todoService.completeTodo(Number(id));
  }
}
