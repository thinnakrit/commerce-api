import { Injectable } from '@nestjs/common';
import { ParentCategory } from './interfaces/category.interface';

@Injectable()
export class CategoryService {
  private readonly categorys: ParentCategory[] = [];

  private readonly category: ParentCategory;

  addCategory(category: ParentCategory) {
    this.categorys.push(category);
  }

  removeCategory(category: ParentCategory) {
    this.categorys.push(category);
  }

  updateCategory(category: ParentCategory) {
    this.categorys.push(category);
  }

  findAll(): ParentCategory[] {
    return this.categorys;
  }

  findByID(id: string): ParentCategory {
    return this.category;
  }
}
