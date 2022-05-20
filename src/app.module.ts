import { Module } from '@nestjs/common';
import { CartModule } from './modules/cart/cart.module';
import { ProductModule } from './modules/product/product.module';
import { CategoryModule } from './modules/product/category.module';
import { CoreModule } from './core/core.module';

@Module({
  imports: [CartModule, CoreModule, ProductModule, CategoryModule],
})
export class AppModule {}
