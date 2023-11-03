import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CompressionModule } from './compression/compression.module';

@Module({
  imports: [CompressionModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
