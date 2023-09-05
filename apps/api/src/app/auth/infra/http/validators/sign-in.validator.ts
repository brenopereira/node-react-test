import { IsEmail, IsNotEmpty } from 'class-validator';

export class SignInValidator {
  @IsEmail()
  @IsNotEmpty({ message: 'O e-mail é obrigatório' })
  email: string;

  @IsNotEmpty({ message: 'A senha é obrigatória' })
  password: string;
}
