import { Injectable } from '@nestjs/common';
import { ClientRepository } from '../repositories/client.repository';

@Injectable()
export class CreateClient {
  constructor(private clientRepository: ClientRepository) {}

  async execute({ name, birth_date, document, address, city, state }) {
    return await this.clientRepository.create({
      name,
      birth_date,
      document,
      address,
      city,
      state,
    });
  }
}
