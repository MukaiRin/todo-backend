import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { TodoService } from './todo.service';
import { Todo } from './todo.model';

@Resolver(() => Todo)
export class TodoResolver {
  constructor(private readonly todoService: TodoService) {}

  // 全てのTodoを取得
  @Query(() => [Todo], { name: 'todos' })
  getTodos() {
    return this.todoService.getTodos();
  }

  // 新しいTodoを追加
  @Mutation(() => Todo)
  addTodo(@Args('title') title: string) {
    return this.todoService.addTodo(title);
  }

  // Todoを削除
  @Mutation(() => Boolean)
  deleteTodo(@Args('id', { type: () => Int }) id: number) {
    return this.todoService.deleteTodo(id).then(() => true);
  }

  // Todoのcompletedをtrueに更新
  @Mutation(() => Todo)
  completeTodo(@Args('id', { type: () => Int }) id: number) {
    return this.todoService.completeTodo(id);
  }
}
