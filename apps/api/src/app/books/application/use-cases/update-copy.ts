import { Injectable } from '@nestjs/common';
import { CopyRepository } from '../repositories/copy.repository';

@Injectable()
export class UpdateCopy {
  constructor(private copyRepository: CopyRepository) {}

  async execute(id: number, data) {
    return await this.copyRepository.update(id, data);
  }
}
