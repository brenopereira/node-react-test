import { IsNotEmpty } from 'class-validator';

export class CreateRentValidator {
  @IsNotEmpty({ message: 'O livro é obrigatório' })
  copyId: string;

  @IsNotEmpty({ message: 'O cliente é obrigatório' })
  clientId: string;

  @IsNotEmpty({
    message: 'A data para o cliente devolver o livro é obrigatória',
  })
  expires_at: string;
}
