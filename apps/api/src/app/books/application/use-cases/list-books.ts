import { Injectable } from '@nestjs/common';
import { BookRepository } from '../repositories/book.repository';

@Injectable()
export class ListBook {
  constructor(private bookRepository: BookRepository) {}

  async execute() {
    return await this.bookRepository.findAll();
  }
}
