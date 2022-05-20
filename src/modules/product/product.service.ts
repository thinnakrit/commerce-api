import { Injectable } from '@nestjs/common';
import { Product } from './interfaces/product.interface';

@Injectable()
export class ProductService {
  private readonly products: Product[] = [];

  private readonly product: Product;

  addProduct(product: Product) {
    this.products.push(product);
  }

  removeProduct(product: Product) {
    this.products.push(product);
  }

  updateProduct(product: Product) {
    this.products.push(product);
  }

  findAll(): Product[] {
    return this.products;
  }

  findBySku(sku: string): Product {
    return this.product;
  }
}
