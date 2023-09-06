import { IsOptional } from 'class-validator';

export class UpdateClientValidator {
  @IsOptional()
  name: string;

  @IsOptional()
  birth_date: string;

  @IsOptional()
  document: string;

  @IsOptional()
  address: string;
}
