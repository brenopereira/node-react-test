import { Injectable } from '@nestjs/common';
import { PrismaService } from '@node-test-fcamara/database';
import { BookRepository } from '../../../application/repositories/book.repository';

@Injectable()
export class PrismaBookRepository implements BookRepository {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    return await this.prisma.books.findMany({
      include: {
        book_copies: true,
      },
    });
  }

  async create({ title, author }) {
    return await this.prisma.books.create({
      data: {
        title,
        author,
      },
    });
  }

  async findById(id: number) {
    return await this.prisma.books.findFirst({
      where: {
        id: Number(id),
      },
    });
  }

  async delete(id: number) {
    await this.prisma.books.delete({
      where: {
        id: Number(id),
      },
    });

    return;
  }

  async update(id: number, data: any) {
    return await this.prisma.books.update({
      where: {
        id: Number(id),
      },
      data,
    });
  }
}
