import { Module } from '@nestjs/common';
import { CompressionService } from './compression.service';
import { CompressionController } from './compression.controller';
import { UploadModule } from 'src/upload/upload.module';

@Module({
  providers: [CompressionService],
  controllers: [CompressionController],
  imports: [UploadModule],
})
export class CompressionModule {}
