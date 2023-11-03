import { Injectable } from '@nestjs/common';
import { diskStorage } from 'multer';
import { extname } from 'path';

@Injectable()
export class UploadService {
  constructor() {}

  // Configure multer storage
  storage = diskStorage({
    destination: './uploads',
    filename: (req, file, callback) => {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
      callback(null, uniqueSuffix + extname(file.originalname));
    },
  });

  // Multer options
  multerOptions = {
    storage: this.storage,
  };
}
