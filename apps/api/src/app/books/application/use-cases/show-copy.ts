import { Injectable } from '@nestjs/common';
import { CopyRepository } from '../repositories/copy.repository';

@Injectable()
export class ShowCopy {
  constructor(private copyRepository: CopyRepository) {}

  async execute(id: number) {
    return await this.copyRepository.findById(id);
  }
}
