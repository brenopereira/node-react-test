import { IsBoolean, IsNotEmpty } from 'class-validator';

export class UpdateReturnedRentValidator {
  @IsNotEmpty({
    message: 'A indicação de devolução do livro é obrigatória',
  })
  @IsBoolean({ message: 'O status do retorno é somente booleanos' })
  returned: string;
}
