import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe, BadRequestException } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationError } from 'class-validator';
import { PORT } from './constants';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidUnknownValues: true,
      stopAtFirstError: true,
      transform: true,
      exceptionFactory: (errors: ValidationError[]) => {
        const messages = errors.map((error) => {
          return {
            [`${error.property}`]: {
              error: `${error.property} has wrong value ${error.value}.`,
              message: Object.values(error.constraints).join(''),
            },
          };
        });

        const errorResponse = {
          statusCode: 400,
          error: 'Bad Request',
          message: messages,
        };
        return new BadRequestException(errorResponse);
      },
    }),
  );

  const config = new DocumentBuilder()
    .setTitle('File Compression and Decompression API')
    .setDescription(
      'This is a versatile API for file compression and decompression, built with Nest.js. It allows users to compress and decompress various file formats, optimizing storage and data transfer.',
    )
    .setVersion('1.0')
    .addBearerAuth(
      { type: 'http', scheme: 'bearer', bearerFormat: 'JWT' },
      'jwt',
    )
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);

  await app.listen(PORT);
}
bootstrap();
