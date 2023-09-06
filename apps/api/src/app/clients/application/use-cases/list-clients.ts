import { Injectable } from '@nestjs/common';
import { ClientRepository } from '../repositories/client.repository';

@Injectable()
export class ListClients {
  constructor(private clientRepository: ClientRepository) {}

  async execute() {
    return await this.clientRepository.findAll();
  }
}
