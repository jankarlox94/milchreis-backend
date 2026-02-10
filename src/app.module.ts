import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SupabaseModule } from './supabase/supabase.module';
import { OrdersModule } from './orders/orders.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [SupabaseModule, OrdersModule, ConfigModule.forRoot()],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
