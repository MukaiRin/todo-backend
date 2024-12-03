import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { TodoModule } from './todo/todo.module';

@Module({
  imports: [
    // GraphQLの設定
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'), // スキーマファイルを自動生成
      sortSchema: true, // スキーマをソートして生成
    }),

    // Todoモジュールをインポート
    TodoModule,
  ],
  controllers: [], // AppControllerは削除
  providers: [], // AppServiceは削除
})
export class AppModule {}
