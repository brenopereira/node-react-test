import { IsNotEmpty } from 'class-validator';

export class CreateClientValidator {
  @IsNotEmpty({ message: 'O nome é obrigatório' })
  name: string;

  @IsNotEmpty({ message: 'A data de nascimento é obrigatório' })
  birth_date: string;

  @IsNotEmpty({ message: 'O CPF é obrigatório' })
  document: string;

  @IsNotEmpty({ message: 'O endereço é obrigatório' })
  address: string;
}
