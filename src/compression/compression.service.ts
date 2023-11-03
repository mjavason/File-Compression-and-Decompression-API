import { Injectable } from '@nestjs/common';
import * as zlib from 'zlib';
import { createReadStream, createWriteStream } from 'fs';
import { promisify } from 'util';

const pipeline = promisify(require('stream').pipeline);

@Injectable()
export class CompressionService {
  async compressFile(inputFilePath: string, outputFilePath: string) {
    const gzip = zlib.createGzip();
    const source = createReadStream(inputFilePath);
    const destination = createWriteStream(outputFilePath);

    await pipeline(source, gzip, destination);
  }

  async decompressFile(inputFilePath: string, outputFilePath: string) {
    const gunzip = zlib.createGunzip();
    const source = createReadStream(inputFilePath);
    const destination = createWriteStream(outputFilePath);

    await pipeline(source, gunzip, destination);
  }
}
