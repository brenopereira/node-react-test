import { PrismaService } from '@node-test-fcamara/database';
import { UserRepository as UserRepositoryContract } from '../contracts/user.repository';

export class PrismaUserRepository implements UserRepositoryContract {
  constructor(private prisma: PrismaService) {}

  async findById(id: number) {
    const user = await this.prisma.users.findFirstOrThrow({
      where: {
        id,
      },
    });

    if (!user) {
      return null;
    }

    return user;
  }
}
