import { Injectable } from '@nestjs/common';
import { ClientRepository } from '../repositories/client.repository';

@Injectable()
export class ShowClient {
  constructor(private clientRepository: ClientRepository) {}

  async execute(id: number) {
    return await this.clientRepository.findById(id);
  }
}
