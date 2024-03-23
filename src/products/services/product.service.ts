import { Inject, Injectable } from '@nestjs/common';
import { PRODUCT_REPOSITORY } from 'src/core/constants';
import { ProductDto } from '../dto/products.dto';
import { Product } from '../products.entity'
import { uuid } from 'uuidv4';


@Injectable()
export class ProductService {
    
    constructor(@Inject(PRODUCT_REPOSITORY) private readonly productRepository: typeof Product) { }

    async create(product: ProductDto): Promise<Product> {
        const saveProduct = { ...product, productID:  uuid() }
        return await this.productRepository.create<Product>(saveProduct);
    }

    async getAll(): Promise<Product[]> {
        return await this.productRepository.findAll<Product>();
    }

}
