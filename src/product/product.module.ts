import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Subcategory } from 'src/subcategory/entities/subcategory.entity';
import { Product } from './entities/product.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Subcategory, Product])],
  controllers: [ProductController],
  providers: [ProductService],
})
export class ProductModule { }
