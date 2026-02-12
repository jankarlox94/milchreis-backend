import { Injectable, Logger } from '@nestjs/common';
import { SupabaseService } from '../supabase/supabase.service';

@Injectable()
export class OrdersService {
  constructor(private readonly supabaseService: SupabaseService) {}

  async createOrder(orderData: any) {
    const client = this.supabaseService.getClient();
    const logger = new Logger();
    logger.debug(
      `this is in createOrder>service>orderData${JSON.stringify(orderData, null, 2)}, and this is the cart:${JSON.stringify(orderData.cart, null, 2)}`,
    );
    debugger;
    const { data, error } = await client
      .from('orders')
      .insert({
        items: orderData['items'],
        total_price: orderData['total_price'],
        status: orderData['status'],
        customer_name: orderData['customer_name'],
        additional_instructions: orderData['additional_instructions'],
      })
      .select();

    if (error) throw new Error(error.message);
    return data;
  }

  async findAllOrders() {
    const client = this.supabaseService.getClient();
    const { data } = await client
      .from('orders')
      .select('*')
      .order('created_at', { ascending: false });
    return data;
  }

  async updateStatus(id: string, status: string) {
    const client = this.supabaseService.getClient();
    const { data } = await client
      .from('orders')
      .update({ status })
      .eq('id', id)
      .select();
    return data;
  }
}
