import { Inject, Injectable } from '@nestjs/common';
import { PRODUCT_REPOSITORY } from '../../core/constants';
import { ProductDto } from '../dto/products.dto';
import { Product } from '../entities/products.entity'
import { uuid } from 'uuidv4';
import { ProductUpdateDto } from '../dto/product-update.dto';


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

    async update(product: ProductUpdateDto) {
        return await this.productRepository.update({ ...product }, { where: { productID: product.productID } });
    }

    async getProductById(productID: string): Promise<Product> {
        return await this.productRepository.findOne<Product>({ where: { productID } });
    }

    async delete(productID: string) {
        return await this.productRepository.destroy({ where: { productID } });
    }
}
