import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Todo {
  @Field(() => Int) // idフィールド（数値型）
  id: number;

  @Field() // titleフィールド（文字列型）
  title: string;

  @Field() // completedフィールド（真偽値型）
  completed: boolean;
}
