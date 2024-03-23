import { Body, Controller, Get, Post } from '@nestjs/common';
import { ProductService } from '../services/product.service';
import { ProductDto } from '../dto/products.dto';

@Controller('products')
export class ProductControllerController {
    constructor(private readonly productService: ProductService) {}
    @Get('')
    getAllProducts() {
        return this.productService.getAll();
    }

    @Post('')
    async createProduct(@Body() product: ProductDto) {
        try {
            const create = await this.productService.create(product);
            return {
                success: true,
                message: 'Product successfully created'
            }
        } catch (error) {
            console.log(error);
            return {
                success: false,
                message: 'Something went wrong please try again later'
            }
        }
    }
}
