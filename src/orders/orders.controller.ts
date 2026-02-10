import {
  Controller,
  Post,
  Get,
  Patch,
  Body,
  Param,
  Logger,
} from '@nestjs/common';
import { OrdersService } from './orders.service';

@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Post()
  async create(@Body() body: any) {
    const logger = new Logger();
    logger.debug(`This application is on ordersController `);
    return this.ordersService.createOrder(body);
  }

  @Get()
  async findAll() {
    return this.ordersService.findAllOrders();
  }

  @Patch(':id/status')
  async updateStatus(@Param('id') id: string, @Body('status') status: string) {
    return this.ordersService.updateStatus(id, status);
  }
}
