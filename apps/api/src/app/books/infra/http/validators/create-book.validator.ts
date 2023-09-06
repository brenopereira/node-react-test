import { IsNotEmpty } from 'class-validator';

export class CreateBookValidator {
  @IsNotEmpty({ message: 'O nome do autor é obirgatório' })
  author: string;

  @IsNotEmpty({ message: 'O título é obrigatório' })
  title: string;
}
