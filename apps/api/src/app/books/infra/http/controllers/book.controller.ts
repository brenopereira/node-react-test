import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { CreateBook } from '../../../application/use-cases/create-book';
import { DeleteBook } from '../../../application/use-cases/delete-book';
import { ListBook } from '../../../application/use-cases/list-books';
import { ShowBook } from '../../../application/use-cases/show-book';
import { UpdateBook } from '../../../application/use-cases/update-book';
import { CreateBookValidator } from '../validators/create-book.validator';
import { UpdateBookValidator } from '../validators/update-book.validator';

@Controller('books')
@UseGuards(AuthGuard('jwt'))
export class BookController {
  constructor(
    private createBook: CreateBook,
    private listBook: ListBook,
    private deleteBook: DeleteBook,
    private updateBook: UpdateBook,
    private showBook: ShowBook
  ) {}

  @Get('/')
  index() {
    return this.listBook.execute();
  }

  @Get('/:id')
  show(@Param('id') id: number) {
    return this.showBook.execute(id);
  }

  @Post('/')
  store(@Body() body: CreateBookValidator) {
    return this.createBook.execute(body);
  }

  @Put('/:id')
  update(@Param('id') id: number, @Body() body: UpdateBookValidator) {
    return this.updateBook.execute(id, body);
  }

  @Delete('/:id')
  remove(@Param('id') id: number) {
    return this.deleteBook.execute({ id });
  }
}
