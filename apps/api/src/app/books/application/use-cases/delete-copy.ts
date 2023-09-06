import { Injectable } from '@nestjs/common';
import { BusinessException } from '@node-test-fcamara/global';
import { CopyRepository } from '../repositories/copy.repository';

@Injectable()
export class DeleteCopy {
  constructor(private copyRepository: CopyRepository) {}

  async execute({ id }) {
    try {
      await this.copyRepository.delete(id);

      return {
        message: 'Cópia do livro removida com sucesso!',
      };
    } catch (err) {
      throw new BusinessException('O livro já foi removido anteriormente');
    }
  }
}
