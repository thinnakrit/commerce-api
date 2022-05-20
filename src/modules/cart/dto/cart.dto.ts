import { IsArray, IsInt, IsString } from 'class-validator';

export class CartSkuDto {
  @IsString()
  readonly sku: string;

  @IsInt()
  readonly qty: number;
}

export class CartSummaryDto {
  @IsArray()
  readonly skus: string;

  @IsInt()
  readonly qty: number;

  @IsInt()
  readonly discount: number;

  @IsInt()
  readonly orderFee: number;

  @IsInt()
  readonly shipmentFee: number;

  @IsInt()
  readonly shipmentCost: number;

  @IsInt()
  readonly summary: number;

  @IsString()
  readonly couponCode: string;

  @IsString()
  readonly promotionID: string;

  @IsString()
  readonly remark: string;
}
