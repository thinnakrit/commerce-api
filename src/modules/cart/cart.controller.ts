import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { Roles } from '../../common/decorators/roles.decorator';
import { RolesGuard } from '../../common/guards/roles.guard';
import { CartService } from './cart.service';
import { CartSkuDto } from './dto/cart.dto';
import { Cart } from './interfaces/cart.interface';

@UseGuards(RolesGuard)
@Controller('cart')
export class CartController {
  constructor(private readonly cartService: CartService) {}

  @Post()
  async update(@Body() cart: CartSkuDto) {
    this.cartService.update(cart);
  }

  @Get()
  async findCart(): Promise<Cart> {
    return this.cartService.findCart();
  }
}
