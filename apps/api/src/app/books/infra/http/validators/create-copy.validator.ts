import { IsNotEmpty } from 'class-validator';

export class CreateCopyValidator {
  @IsNotEmpty({ message: 'O ISBN é obrigatório' })
  isbn: string;

  @IsNotEmpty({ message: 'O código da cópia é obrigatório' })
  copy_code: string;

  @IsNotEmpty({ message: 'O livro é obrigatório' })
  bookId: string;
}
