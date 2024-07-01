import { IsString } from 'class-validator';

export class CraeteCarDto {
  @IsString()
  readonly brand: string;

  @IsString()
  readonly model: string;
}
