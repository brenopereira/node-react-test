import { Injectable } from '@nestjs/common';
import { PrismaService } from '@node-test-fcamara/database';
import { RentRepository } from '../../../application/repositories/rent.repository';

@Injectable()
export class PrismaRentRepository implements RentRepository {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    return await this.prisma.rents.findMany();
  }

  async findById(id: number) {
    return await this.prisma.rents.findFirst({
      where: {
        id: Number(id),
      },
    });
  }

  async findRentByClient(clientId: number, copyId: number) {
    return await this.prisma.rents.findMany({
      where: {
        copyId: Number(copyId),
        clientId: Number(clientId),
      },
    });
  }

  async findRentByCopy(copyId: number) {
    return await this.prisma.rents.findMany({
      where: {
        copyId: Number(copyId),
      },
    });
  }

  async delete(id: number) {
    await this.prisma.rents.delete({
      where: {
        id: Number(id),
      },
    });

    return;
  }

  async update(id: number, data: any) {
    return await this.prisma.rents.update({
      where: {
        id: Number(id),
      },
      data,
    });
  }

  async create({ copyId, clientId, expires_at, returned_at }) {
    return await this.prisma.rents.create({
      data: {
        copyId: Number(copyId),
        clientId: Number(clientId),
        expires_at,
        returned_at,
      },
    });
  }
}
