import { Module } from '@nestjs/common';
import { PrismaService } from '@node-test-fcamara/database';
import { BookRepository } from '../../application/repositories/book.repository';
import { CopyRepository } from '../../application/repositories/copy.repository';
import { PrismaBookRepository } from './repositories/prisma-book.repository';
import { PrismaCopyRepository } from './repositories/prisma-copy.repository';

@Module({
  providers: [
    PrismaService,
    {
      provide: BookRepository,
      useClass: PrismaBookRepository,
    },
    {
      provide: CopyRepository,
      useClass: PrismaCopyRepository,
    },
  ],
  exports: [BookRepository, CopyRepository],
})
export class BookDatabaseModule {}
