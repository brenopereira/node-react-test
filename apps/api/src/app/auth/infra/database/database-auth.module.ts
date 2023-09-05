import { Module } from '@nestjs/common';
import { PrismaService } from '@node-test-fcamara/database';
import { AuthRepository } from '../../application/repositories/auth.repository';
import { PrismaAuthRepository } from './repositories/prisma-auth.repository';

@Module({
  providers: [
    PrismaService,
    {
      provide: AuthRepository,
      useClass: PrismaAuthRepository,
    },
  ],
  exports: [AuthRepository],
})
export class AuthDatabaseModule {}
