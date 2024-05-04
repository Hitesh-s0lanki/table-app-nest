import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Subcategory } from 'src/subcategory/entities/subcategory.entity';
import { Product } from './entities/product.entity';

@Injectable()
export class ProductService {

  constructor(
    @InjectRepository(Subcategory) private subcategoryRepository: Repository<Subcategory>,
    @InjectRepository(Product) private productRepository: Repository<Product>
  ) { }

  async create(id: string, createProductDto: CreateProductDto) {

    const subcategory = await this.subcategoryRepository.findOneBy({ id })

    if (!subcategory) {
      throw new HttpException('SubCategory not found cannot create a subcategory', HttpStatus.BAD_REQUEST)
    }
    const newProduct = this.productRepository.create({
      ...createProductDto,
      subcategory
    })

    return this.productRepository.save(newProduct)
  }

  findAll() {
    return this.productRepository.find({ relations: ['subcategory'] })
  }

  findOne(id: string) {
    return this.productRepository.findOneBy({ id });
  }

  update(id: string, updateProductDto: UpdateProductDto) {
    return this.productRepository.update({ id }, { ...updateProductDto })
  }

  remove(id: string) {
    return this.productRepository.delete({ id });
  }
}
