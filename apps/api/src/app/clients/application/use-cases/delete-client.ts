import { Injectable } from '@nestjs/common';
import { BusinessException } from '@node-test-fcamara/global';
import { ClientRepository } from '../repositories/client.repository';

type DeleteClientParams = {
  id: number;
};

@Injectable()
export class DeleteClient {
  constructor(private clientRepository: ClientRepository) {}

  async execute({ id }: DeleteClientParams) {
    try {
      await this.clientRepository.delete(id);

      return {
        message: 'Cliente removido com sucesso!',
      };
    } catch (err) {
      throw new BusinessException('O cliente já foi removido anteriormente');
    }
  }
}
