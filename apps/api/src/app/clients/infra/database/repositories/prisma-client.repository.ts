import { Injectable } from '@nestjs/common';
import { ClientParams } from '@node-test-fcamara/custom-types';
import { PrismaService } from '@node-test-fcamara/database';
import { ClientRepository } from '../../../application/repositories/client.repository';

@Injectable()
export class PrismaClientRepository implements ClientRepository {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    return await this.prisma.clients.findMany();
  }

  async findById(id: number) {
    return await this.prisma.clients.findFirst({
      where: {
        id: Number(id),
      },
    });
  }

  async delete(id: number) {
    await this.prisma.clients.delete({
      where: {
        id: Number(id),
      },
    });

    return;
  }

  async update(id: number, data: any) {
    return await this.prisma.clients.update({
      where: {
        id: Number(id),
      },
      data,
    });
  }

  async create({ name, birth_date, document, address }: ClientParams) {
    return await this.prisma.clients.create({
      data: {
        name,
        birth_date,
        document,
        address,
      },
    });
  }
}
