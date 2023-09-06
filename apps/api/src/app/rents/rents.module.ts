import { Module } from '@nestjs/common';
import { AuthenticateModule } from '@node-test-fcamara/authenticate';
import { DatabaseModule } from '@node-test-fcamara/database';
import { CreateRent } from './application/use-cases/create-rent';
import { UpdateReturnedRent } from './application/use-cases/update-returned-rent';
import { RentDatabaseModule } from './infra/database/rent-database.module';
import { RentController } from './infra/http/controllers/rent.controller';

@Module({
  imports: [DatabaseModule, AuthenticateModule, RentDatabaseModule],
  providers: [CreateRent, UpdateReturnedRent],
  controllers: [RentController],
})
export class RentsModule {}
