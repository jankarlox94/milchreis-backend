import { Controller, Post, Get, Patch, Body, Param } from '@nestjs/common';
import { OrdersService } from './orders.service';

@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Post()
  async create(@Body() body: any) {
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
