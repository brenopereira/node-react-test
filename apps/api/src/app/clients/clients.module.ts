import { Module } from '@nestjs/common';
import { AuthenticateModule } from '@node-test-fcamara/authenticate';
import { DatabaseModule } from '@node-test-fcamara/database';
import { CreateClient } from './application/use-cases/create-client';
import { DeleteClient } from './application/use-cases/delete-client';
import { ListClients } from './application/use-cases/list-clients';
import { ShowClient } from './application/use-cases/show-client';
import { UpdateClient } from './application/use-cases/update-client';
import { ClientDatabaseModule } from './infra/database/client-database.module';
import { ClientController } from './infra/http/controllers/client.controller';

@Module({
  imports: [DatabaseModule, AuthenticateModule, ClientDatabaseModule],
  providers: [
    ListClients,
    CreateClient,
    ShowClient,
    UpdateClient,
    DeleteClient,
  ],
  exports: [],
  controllers: [ClientController],
})
export class ClientsModule {}
