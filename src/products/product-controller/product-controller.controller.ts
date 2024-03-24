import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { ProductService } from '../services/product.service';
import { ProductDto } from '../dto/products.dto';
import { ProductUpdateDto } from '../dto/product-update.dto';

@Controller('products')
export class ProductControllerController {
  constructor(private readonly productService: ProductService) {}
  @Get('')
  async getAllProducts() {
    try {
      const products = await this.productService.getAll();
      return {
        success: true,
        data: products,
      };
    } catch (error) {
      console.log(error);
      return {
        success: false,
        message: 'Failed to load products',
      };
    }
  }

  @Post('')
  async createProduct(@Body() product: ProductDto) {
    try {
      const data = await this.productService.create(product);
      return {
        success: true,
        message: 'Product successfully created',
        data: data
      };
    } catch (error) {
      console.log(error);
      return {
        success: false,
        message: 'Something went wrong please try again later',
      };
    }
  }

  @Put('')
  async updateProduct(@Body() product: ProductUpdateDto) {
    try {
      await this.productService.update(product);
      return {
        success: true,
        message: 'Product successfully updated',
      };
    } catch (error) {
      console.log(error);
      return {
        success: false,
        message: 'Something went wrong please try again later',
      };
    }
  }

  @Get(':productID')
  async getProductById(@Param() param: { productID: string }) {
    try {
      const product = await this.productService.getProductById(param.productID);
      return {
        success: true,
        data: product,
      };
    } catch (error) {
      console.log(error);
      return {
        success: false,
        message: 'Something went wrong please try again later',
      };
    }
  }

  @Delete(':productID')
  async deleteProduct(@Param() param: { productID: string }) {
    try {
      const productID = param.productID
      await this.productService.delete(productID);
      const products = await this.productService.getAll();
      return {
        success: true,
        message: 'Product successfully deleted',
        data: products,
      };
    } catch (error) {
      console.log(error);
      return {
        success: false,
        message: 'Something went wrong please try again later',
      };
    }
  }
}
