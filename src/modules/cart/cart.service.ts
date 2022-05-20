import { Injectable } from '@nestjs/common';
import { CartSummary, CartSku } from './interfaces/cart.interface';

@Injectable()
export class CartService {
  private readonly cart: CartSummary;
  private readonly cartSku: CartSku;

  update(cart: CartSku): CartSummary {
    return this.cart;
  }

  findCart(): CartSummary {
    return this.cart;
  }
}
