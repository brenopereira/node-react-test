import { Injectable } from '@nestjs/common';
import { BookRepository } from '../repositories/book.repository';

@Injectable()
export class CreateBook {
  constructor(private bookRepository: BookRepository) {}

  async execute({ author, title }) {
    return await this.bookRepository.create({
      author,
      title,
    });
  }
}
