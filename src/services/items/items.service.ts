import { Injectable } from '@nestjs/common';
import { Product } from 'src/interface/product.interface';

@Injectable()
export class ItemsService {
    private readonly product: Product[] = [];

    create(product: Product) {
        this.product.push(product);
    }

    findAll(): Product[] {
        return this.product;
    }
}
