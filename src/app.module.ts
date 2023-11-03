import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UploadModule } from './upload/upload.module';
import { CompressionModule } from './compression/compression.module';

@Module({
  imports: [UploadModule, CompressionModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
