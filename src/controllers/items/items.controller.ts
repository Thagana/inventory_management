import { Controller, Get } from '@nestjs/common';

@Controller('items')
export class ItemsController {
    @Get('')
    getItems(): string {
      return 'Meow! Here are your cute cats.';
    }
}
