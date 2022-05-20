export interface Cart {
  readonly skus: CartSku;
}
export interface CartSku {
  readonly sku: string;
  readonly qty: number;
}

export interface CartSummary {
  readonly skus: CartSku;
  readonly qty: number;
  readonly couponCode: string;
  readonly promotionID: string;
  readonly remark: string;
  readonly discount: number;
  readonly orderFee: number;
  readonly shipmentFee: number;
  readonly shipmentCost: number;
  readonly summary: number;
}
