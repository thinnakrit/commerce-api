import { IsString } from 'class-validator';

export class ParentCategoryDto {
  @IsString()
  readonly categoryID: string;

  @IsString()
  readonly categoryName: string;

  @IsString()
  readonly categoryUrl: string;

  @IsString()
  readonly categoryDetail: string;

  @IsString()
  readonly categoryCoverUrl: string;

  @IsString()
  readonly categorySequence: string;
}
