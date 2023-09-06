import { Injectable } from '@nestjs/common';
import { BusinessException } from '@node-test-fcamara/global';
import { RentRepository } from '../repositories/rent.repository';

@Injectable()
export class CreateRent {
  constructor(private rentRepository: RentRepository) {}

  private async validateRentCopy(copyId: number) {
    const rentCopyExists = await this.rentRepository.findRentByCopy(copyId);
    const filtered = rentCopyExists.filter((rent) => !rent.returned);

    if (!filtered.length) {
      return true;
    }

    throw new BusinessException(
      'O livro encontra-se indisponível no momento para locacação.'
    );
  }

  private async validateRent(clientId: number, copyId: number) {
    const rentCopy = await this.rentRepository.findRentByClient(
      clientId,
      copyId
    );

    const rentDelays = rentCopy.filter(
      (rent) =>
        rent.returned_at !== rent.created_at &&
        rent.returned_at > rent.expires_at &&
        rent.returned_at > new Date()
    );

    if (rentDelays.length <= 2) {
      return true;
    }

    throw new BusinessException('O cliente possuí mais de 2 atrasos.');
  }

  async execute({ clientId, copyId, expires_at }) {
    const validateRentCopyAvailability = await this.validateRentCopy(copyId);
    const validateRentAvailability = await this.validateRent(clientId, copyId);

    if (validateRentCopyAvailability && validateRentAvailability) {
      return await this.rentRepository.create({
        clientId,
        copyId,
        expires_at,
      });
    }
  }
}
