import { Injectable } from '@nestjs/common';
import { toCryptString } from '@node-test-fcamara/authenticate';
import { SignUpParams, UserCredentials } from '@node-test-fcamara/custom-types';
import { PrismaService } from '@node-test-fcamara/database';
import { AuthRepository } from '../../../application/repositories/auth.repository';

@Injectable()
export class PrismaAuthRepository implements AuthRepository {
  constructor(private prisma: PrismaService) {}

  async create({ name, email, password }: SignUpParams) {
    return await this.prisma.users.create({
      data: {
        name,
        email,
        password: toCryptString(password),
      },
    });
  }

  async findCredential({ email, password }: UserCredentials) {
    return await this.prisma.users.findFirst({
      where: {
        email,
        password: toCryptString(password),
      },
    });
  }
}
