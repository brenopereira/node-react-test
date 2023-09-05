import { Global, Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { DatabaseModule } from '@node-test-fcamara/database';
import { AuthenticateService } from './authenticate.service';
import { UserRepository } from './contracts/user.repository';
import { JwtProvider } from './providers/jwt.provider';
import { PrismaUserRepository } from './repositories/prisma-user.repository';

@Global()
@Module({
  imports: [
    DatabaseModule,
    PassportModule,
    JwtModule.register({
      secret: 'fcamara-abc123',
      signOptions: { expiresIn: '60s' },
    }),
  ],
  providers: [
    JwtProvider,
    AuthenticateService,
    {
      provide: UserRepository,
      useClass: PrismaUserRepository,
    },
  ],
  exports: [AuthenticateService, UserRepository],
})
export class AuthenticateModule {}
