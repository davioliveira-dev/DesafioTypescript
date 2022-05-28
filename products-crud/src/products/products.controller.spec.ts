import { Test, TestingModule } from '@nestjs/testing';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';

const mockProduct = [
  {
    id: 1,
    name: 'test',
    price: 1,
    brand: 'test',
    image: 'test',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

describe('ProductsController', () => {
  let controller: ProductsController;
  let service: ProductsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProductsController],
      providers: [ProductsService],
    }).compile();

    service = module.get<ProductsService>(ProductsService);
    controller = module.get<ProductsController>(ProductsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
    expect(service).toBeDefined();
  });

  // it('should return array of products', async () => {
  //   jest
  //     .spyOn(service, 'findAll')
  //     .mockImplementation(() => Promise.resolve(mockProduct));

  //   expect(await controller.findAll()).toBe(mockProduct);
  // });

  // it('should return one of products', async () => {
  //   jest
  //     .spyOn(service, 'findOne')
  //     .mockImplementation((id) => Promise.resolve(mockProduct[id]));

  //   expect(await controller.findOne('1')).toBe(mockProduct);
  // });
});
