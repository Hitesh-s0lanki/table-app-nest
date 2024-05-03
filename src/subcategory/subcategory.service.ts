import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateSubcategoryDto } from './dto/create-subcategory.dto';
import { UpdateSubcategoryDto } from './dto/update-subcategory.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Subcategory } from './entities/subcategory.entity';
import { Repository } from 'typeorm';
import { Category } from 'src/category/entities/category.entity';

@Injectable()
export class SubcategoryService {

  constructor(
    @InjectRepository(Subcategory) private subcategoryRepository: Repository<Subcategory>,
    @InjectRepository(Category) private categoryRepository: Repository<Category>
  ) { }

  async create(id: string, createSubcategoryDto: CreateSubcategoryDto) {

    const category = await this.categoryRepository.findOneBy({ id })

    if (!category) {
      throw new HttpException('Category not found cannot create a subcategory', HttpStatus.BAD_REQUEST)
    }
    const newSubcategory = this.subcategoryRepository.create({
      ...createSubcategoryDto,
      category
    })

    return await this.subcategoryRepository.save(newSubcategory)
  }

  findAll() {
    return this.subcategoryRepository.find({ relations: ['products'] })
  }

  findOne(id: string) {
    return this.subcategoryRepository.findOneBy({ id });
  }

  update(id: string, updateSubcategoryDto: UpdateSubcategoryDto) {
    return this.subcategoryRepository.update({ id }, { ...updateSubcategoryDto })
  }

  remove(id: string) {
    return this.subcategoryRepository.delete({ id });
  }
}
