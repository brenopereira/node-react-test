import { Module } from '@nestjs/common';
import { PrismaService } from '@node-test-fcamara/database';
import { ClientRepository } from '../../application/repositories/client.repository';
import { PrismaClientRepository } from './repositories/prisma-client.repository';

@Module({
  providers: [
    PrismaService,
    {
      provide: ClientRepository,
      useClass: PrismaClientRepository,
    },
  ],
  exports: [ClientRepository],
})
export class ClientDatabaseModule {}
