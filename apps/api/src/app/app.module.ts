import { Module } from '@nestjs/common';
import { APP_FILTER } from '@nestjs/core';
import { HttpExceptionFilter } from '@node-test-fcamara/global';
import { AuthModule } from './auth/auth.module';
import { BooksModule } from './books/books.module';
import { ClientsModule } from './clients/clients.module';

@Module({
  imports: [AuthModule, BooksModule, ClientsModule],
  controllers: [],
  providers: [
    {
      provide: APP_FILTER,
      useClass: HttpExceptionFilter,
    },
  ],
})
export class AppModule {}
