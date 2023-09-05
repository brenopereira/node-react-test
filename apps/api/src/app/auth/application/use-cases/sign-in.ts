import { Injectable } from '@nestjs/common';
import { AuthenticateService } from '@node-test-fcamara/authenticate';
import { BusinessException } from '@node-test-fcamara/global';
import { AuthRepository } from '../repositories/auth.repository';

type SignInParams = {
  email: string;
  password: string;
};

@Injectable()
export class SignIn {
  constructor(
    private authRepository: AuthRepository,
    private authenticateService: AuthenticateService
  ) {}

  async execute({ email, password }: SignInParams) {
    const user = await this.authRepository.findCredential({
      email: email,
      password: password,
    });

    if (user) return await this.authenticateService.login(user);

    throw new BusinessException('Usuário não encontrado!');
  }
}
