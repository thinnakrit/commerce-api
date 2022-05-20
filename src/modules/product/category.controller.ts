import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { Roles } from '../../common/decorators/roles.decorator';
import { RolesGuard } from '../../common/guards/roles.guard';
import { CategoryService } from './category.service';
import { ParentCategoryDto } from './dto/category.dto';
import { ParentCategory } from './interfaces/category.interface';

@UseGuards(RolesGuard)
@Controller('product/category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Post('add-category')
  @Roles('admin')
  async addCategory(@Body() parentCategoryDto: ParentCategoryDto) {
    this.categoryService.addCategory(parentCategoryDto);
  }

  @Post('remove-category')
  @Roles('admin')
  async removeCategory(@Body() parentCategoryDto: ParentCategoryDto) {
    this.categoryService.removeCategory(parentCategoryDto);
  }

  @Post('dupplicate-category')
  @Roles('admin')
  async dupplicateCategory(@Body() parentCategoryDto: ParentCategoryDto) {
    this.categoryService.addCategory(parentCategoryDto);
  }

  @Post('update-category')
  @Roles('admin')
  async updateCategory(@Body() parentCategoryDto: ParentCategoryDto) {
    this.categoryService.updateCategory(parentCategoryDto);
  }

  @Get(':id')
  async findByID(
    @Param('id')
    id: string,
  ): Promise<ParentCategory> {
    return this.categoryService.findByID(id);
  }
}
