import { IsOptional } from 'class-validator';

export class UpdateBookValidator {
  @IsOptional()
  author: string;

  @IsOptional()
  title: string;
}
