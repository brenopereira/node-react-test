import { Injectable } from '@nestjs/common';
import { CopyRepository } from '../repositories/copy.repository';

@Injectable()
export class ListCopy {
  constructor(private copyRepository: CopyRepository) {}

  async execute() {
    return await this.copyRepository.findAll();
  }
}
