import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { isNotEmptyObject } from 'class-validator';
import { FindOneOptions, Repository } from 'typeorm';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
  ) {}

  create(createProductDto: CreateProductDto) {
    const product = this.productRepository.create(createProductDto);
    return this.productRepository.save(product);
  }

  findAll(): Promise<Product[]> {
    return this.productRepository.find({ order: { updatedAt: 'ASC' } });
  }

  async findOne(id: number, options?: FindOneOptions<Product>) {
    try {
      const product = await this.productRepository.findOneOrFail(id, options);
      return product;
    } catch (error) {
      throw new HttpException('NOT_FOUND', HttpStatus.NOT_FOUND);
    }
  }

  async update(id: number, updateProductDto: UpdateProductDto) {
    if (!isNotEmptyObject(updateProductDto)) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: 'You need to update at least one field',
        },
        HttpStatus.BAD_REQUEST,
      );
    }

    const product = await this.findOne(id);

    await this.productRepository.update({ id }, updateProductDto);

    return { ...product, ...updateProductDto };
  }

  async remove(id: number) {
    await this.findOne(id);
    await this.productRepository.delete({ id });

    throw new HttpException('DELETED', HttpStatus.OK);
  }
}
