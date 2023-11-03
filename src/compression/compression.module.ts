import { Module } from '@nestjs/common';
import { CompressionService } from './compression.service';
import { CompressionController } from './compression.controller';

@Module({
  providers: [CompressionService],
  controllers: [CompressionController],
})
export class CompressionModule {}
