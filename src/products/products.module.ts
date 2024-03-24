import { Module } from '@nestjs/common';
import { ProductService } from './services/product.service';
import { ProductControllerController } from './product-controller/product-controller.controller';
import { PRODUCT_REPOSITORY } from '../core/constants';
import { Product } from './entities/products.entity';

@Module({
  providers: [ProductService, {
    provide: PRODUCT_REPOSITORY,
    useValue: Product,
}],
  controllers: [ProductControllerController],
  exports: [ProductService],
})
export class ProductsModule {}
