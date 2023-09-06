import { Injectable } from '@nestjs/common';
import { PrismaService } from '@node-test-fcamara/database';
import { CopyRepository } from '../../../application/repositories/copy.repository';

@Injectable()
export class PrismaCopyRepository implements CopyRepository {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    return await this.prisma.book_copies.findMany({
      include: {
        book: {
          select: {
            id: true,
            title: true,
          },
        },
      },
    });
  }

  async create({ isbn, copy_code, bookId }) {
    return await this.prisma.book_copies.create({
      data: {
        isbn,
        copy_code,
        bookId,
      },
    });
  }

  async findById(id: number) {
    return await this.prisma.book_copies.findFirst({
      where: {
        id: Number(id),
      },
    });
  }

  async delete(id: number) {
    await this.prisma.book_copies.delete({
      where: {
        id: Number(id),
      },
    });

    return;
  }

  async update(id: number, data: any) {
    return await this.prisma.book_copies.update({
      where: {
        id: Number(id),
      },
      data,
    });
  }
}
