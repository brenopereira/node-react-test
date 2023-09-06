import { Injectable } from '@nestjs/common';
import { ClientRepository } from '../repositories/client.repository';

@Injectable()
export class UpdateClient {
  constructor(private clientRepository: ClientRepository) {}

  async execute(id: number, data) {
    return await this.clientRepository.update(id, data);
  }
}
