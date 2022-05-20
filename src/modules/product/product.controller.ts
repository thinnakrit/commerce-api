import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { Roles } from '../../common/decorators/roles.decorator';
import { RolesGuard } from '../../common/guards/roles.guard';
import { ProductService } from './product.service';
import { AddProductDto } from './dto/add-product.dto';
import { Product } from './interfaces/product.interface';

@UseGuards(RolesGuard)
@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post('add-product')
  @Roles('admin')
  async addProduct(@Body() addProductDto: AddProductDto) {
    this.productService.addProduct(addProductDto);
  }

  @Post('remove-product')
  @Roles('admin')
  async removeProduct(@Body() addProductDto: AddProductDto) {
    this.productService.removeProduct(addProductDto);
  }

  @Post('dupplicate-product')
  @Roles('admin')
  async dupplicateProduct(@Body() addProductDto: AddProductDto) {
    this.productService.addProduct(addProductDto);
  }

  @Post('update-product')
  @Roles('admin')
  async updateProduct(@Body() addProductDto: AddProductDto) {
    this.productService.updateProduct(addProductDto);
  }

  @Get()
  async findAll(): Promise<Product[]> {
    return this.productService.findAll();
  }

  @Get(':sku')
  async findBySku(
    @Param('sku')
    sku: string,
  ): Promise<Product> {
    return this.productService.findBySku(sku);
  }
}
