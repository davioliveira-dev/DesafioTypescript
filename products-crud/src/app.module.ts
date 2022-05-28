import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './products/entities/product.entity';
import { ProductsModule } from './products/products.module';

const host = process.env.HOST || 'localhost';
const port = Number(process.env.PORT) || 3306;
const username = process.env.USERNAME || 'root';
const password = process.env.PASSWORD || 'root';
const database = process.env.DATABASE || 'products';
const synchronize = Boolean(process.env.NODE_ENV) || true;

@Module({
  imports: [
    TypeOrmModule.forRoot({
      name: 'default',
      type: 'mysql',
      host,
      port,
      username,
      password,
      database,
      entities: [Product],
      synchronize,
    }),
    ProductsModule,
  ],
})
export class AppModule {}
