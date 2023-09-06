import { Injectable } from '@nestjs/common';
import { BusinessException } from '@node-test-fcamara/global';
import { BookRepository } from '../repositories/book.repository';

@Injectable()
export class DeleteBook {
  constructor(private bookRepository: BookRepository) {}

  async execute({ id }) {
    try {
      await this.bookRepository.delete(id);

      return {
        message: 'Livro removido com sucesso!',
      };
    } catch (err) {
      throw new BusinessException('O livro já foi removido anteriormente');
    }
  }
}
