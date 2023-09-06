import { Injectable } from '@nestjs/common';
import { BookRepository } from '../repositories/book.repository';

@Injectable()
export class UpdateBook {
  constructor(private bookRepository: BookRepository) {}

  async execute(id: number, data) {
    return await this.bookRepository.update(id, data);
  }
}
