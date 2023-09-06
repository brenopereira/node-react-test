import { Injectable } from '@nestjs/common';
import { CopyRepository } from '../repositories/copy.repository';

@Injectable()
export class CreateCopy {
  constructor(private copyRepository: CopyRepository) {}

  async execute({ isbn, copy_code, bookId }) {
    return await this.copyRepository.create({
      isbn,
      copy_code,
      bookId,
    });
  }
}
