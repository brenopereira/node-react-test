import { Module } from '@nestjs/common';
import { AuthenticateModule } from '@node-test-fcamara/authenticate';
import { DatabaseModule } from '@node-test-fcamara/database';
import { CreateBook } from './application/use-cases/create-book';
import { CreateCopy } from './application/use-cases/create-copy';
import { DeleteBook } from './application/use-cases/delete-book';
import { DeleteCopy } from './application/use-cases/delete-copy';
import { ListBook } from './application/use-cases/list-books';
import { ListCopy } from './application/use-cases/list-copy';
import { ShowBook } from './application/use-cases/show-book';
import { ShowCopy } from './application/use-cases/show-copy';
import { UpdateBook } from './application/use-cases/update-book';
import { UpdateCopy } from './application/use-cases/update-copy';
import { BookDatabaseModule } from './infra/database/book-database.module';
import { BookController } from './infra/http/controllers/book.controller';
import { CopyController } from './infra/http/controllers/copy.controller';

@Module({
  imports: [DatabaseModule, AuthenticateModule, BookDatabaseModule],
  providers: [
    CreateBook,
    ListBook,
    DeleteBook,
    UpdateBook,
    ShowBook,
    CreateCopy,
    ListCopy,
    DeleteCopy,
    ShowCopy,
    UpdateCopy,
  ],
  controllers: [BookController, CopyController],
})
export class BooksModule {}
