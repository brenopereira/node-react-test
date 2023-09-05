import { Injectable } from '@nestjs/common';
import { SignUpParams } from '@node-test-fcamara/custom-types';
import { BusinessException } from '@node-test-fcamara/global';
import { AuthRepository } from '../repositories/auth.repository';

@Injectable()
export class SignUp {
  constructor(private authRepository: AuthRepository) {}

  async execute({
    name,
    email,
    password,
  }: SignUpParams): Promise<{ message: string }> {
    const user = await this.authRepository.create({
      name,
      email,
      password,
    });

    if (user) {
      return {
        message: 'Usuário criado com sucesso!',
      };
    }

    throw new BusinessException('Não foi possível criar o usuário!');
  }
}
