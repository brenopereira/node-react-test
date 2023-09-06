import { Injectable } from '@nestjs/common';
import { RentRepository } from '../repositories/rent.repository';

@Injectable()
export class UpdateReturnedRent {
  constructor(private rentRepository: RentRepository) {}

  async execute(id, { returned }) {
    const rent = await this.rentRepository.findById(id);

    if (returned)
      return await this.rentRepository.update(id, {
        returned,
        returned_at: new Date(),
      });

    return await this.rentRepository.update(id, {
      returned,
      returned_at: rent.created_at,
    });
  }
}
