import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class TodoService {
  constructor(private readonly prisma: PrismaService) {}

  // Todoを全件取得
  async getTodos() {
    return this.prisma.todo.findMany();
  }

  // 新しいTodoを追加
  async addTodo(title: string) {
    return this.prisma.todo.create({
      data: {
        title,
        completed: false, // デフォルトで未完了
      },
    });
  }

  // Todoを削除
  async deleteTodo(id: number) {
    return this.prisma.todo.delete({
      where: { id },
    });
  }

  // Todoのcompletedをtrueに更新
  async completeTodo(id: number) {
    return this.prisma.todo.update({
      where: { id },
      data: { completed: true },
    });
  }
}
