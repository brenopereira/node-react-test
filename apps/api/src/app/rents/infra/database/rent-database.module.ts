import { Module } from '@nestjs/common';
import { PrismaService } from '@node-test-fcamara/database';
import { RentRepository } from '../../application/repositories/rent.repository';
import { PrismaRentRepository } from './repositories/prisma-rent.repository';

@Module({
  providers: [
    PrismaService,
    {
      provide: RentRepository,
      useClass: PrismaRentRepository,
    },
  ],
  exports: [RentRepository],
})
export class RentDatabaseModule {}
