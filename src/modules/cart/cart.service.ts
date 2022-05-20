import { Injectable } from '@nestjs/common';
import { Cart } from './interfaces/cart.interface';

@Injectable()
export class CartService {
  private readonly cart: Cart[] = [];

  create(cart: Cart) {
    this.cart.push(cart);
  }

  findAll(): Cart[] {
    return this.cart;
  }
}
