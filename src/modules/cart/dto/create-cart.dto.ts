import { IsInt, IsString } from 'class-validator';

export class CreateCartDto {
  @IsString()
  readonly name: string;

  @IsInt()
  readonly age: number;

  @IsString()
  readonly breed: string;
}
