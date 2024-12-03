import { Module } from '@nestjs/common';
import { TodoResolver } from './todo.resolver';
import { TodoService } from './todo.service';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  providers: [TodoResolver, TodoService, PrismaService], // ResolverとServiceを登録
})
export class TodoModule {}
