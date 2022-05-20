import { IsDecimal, IsObject, IsString } from 'class-validator';

export class AddProductDto {
  @IsString()
  readonly productName: string;

  @IsDecimal()
  readonly price: number;

  @IsString()
  readonly productSubSku: string;

  @IsString()
  readonly productParrentSku: string;

  @IsString()
  readonly productVideoUrl: string;

  @IsObject()
  readonly productImages: object;
}
