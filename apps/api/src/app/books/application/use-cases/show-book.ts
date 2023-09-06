import { Injectable } from '@nestjs/common';
import { BookRepository } from '../repositories/book.repository';

@Injectable()
export class ShowBook {
  constructor(private bookRepository: BookRepository) {}

  async execute(id: number) {
    return await this.bookRepository.findById(id);
  }
}
