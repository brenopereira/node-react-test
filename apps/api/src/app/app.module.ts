import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { BooksModule } from './books/books.module';
import { ClientsModule } from './clients/clients.module';

@Module({
  imports: [AuthModule, BooksModule, ClientsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
