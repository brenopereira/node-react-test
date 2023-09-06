import { IsOptional } from 'class-validator';

export class UpdateCopyValidator {
  @IsOptional()
  isbn: string;

  @IsOptional()
  copy_code: string;

  @IsOptional()
  bookId: string;
}
