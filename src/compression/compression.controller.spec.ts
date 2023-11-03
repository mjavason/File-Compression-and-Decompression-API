import { Test, TestingModule } from '@nestjs/testing';
import { CompressionController } from './compression.controller';

describe('CompressionController', () => {
  let controller: CompressionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CompressionController],
    }).compile();

    controller = module.get<CompressionController>(CompressionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
