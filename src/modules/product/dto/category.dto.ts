import { IsString } from 'class-validator';

export class ParentCategoryDto {
  @IsString()
  readonly categoryID: string;

  @IsString()
  readonly categoryName: string;

  @IsString()
  readonly categoryUrl: string;

  readonly categoryDetail: string;
  readonly categoryCoverUrl: string;
  readonly categorySequence: string;
}
