import { Injectable } from '@nestjs/common';
import { SupabaseService } from '../supabase/supabase.service';

@Injectable()
export class OrdersService {
  constructor(private readonly supabaseService: SupabaseService) {}

  async createOrder(orderData: any) {
    const client = this.supabaseService.getClient();
    const { data, error } = await client
      .from('orders')
      .insert([orderData])
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
