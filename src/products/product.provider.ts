import { PRODUCT_REPOSITORY } from 'src/core/constants';
import { Product } from './entities/products.entity';

export const productProviders = [{
    provide: PRODUCT_REPOSITORY,
    useValue: Product,
}];