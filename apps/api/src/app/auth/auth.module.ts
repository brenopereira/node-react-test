import { Module } from '@nestjs/common';
import { AuthenticateModule } from '@node-test-fcamara/authenticate';
import { DatabaseModule } from '@node-test-fcamara/database';
import { SignIn } from './application/use-cases/sign-in';
import { SignUp } from './application/use-cases/sign-up';
import { AuthDatabaseModule } from './infra/database/database-auth.module';
import { AuthController } from './infra/http/controllers/auth.controller';

@Module({
  imports: [DatabaseModule, AuthenticateModule, AuthDatabaseModule],
  providers: [SignUp, SignIn],
  exports: [],
  controllers: [AuthController],
})
export class AuthModule {}
