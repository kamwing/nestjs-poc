import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthorsModule } from './authors/authors.module';
import { BooksModule } from './books/books.module';

@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [
    AuthorsModule,
    BooksModule,
    GraphQLModule.forRoot({
      autoSchemaFile: 'src/generated/schema.gql',
      sortSchema: true,
    }),
  ],
})
export class AppModule {}
