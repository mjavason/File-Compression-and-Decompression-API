import {
  Controller,
  Post,
  Res,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { Response } from 'express';
import { FileInterceptor } from '@nestjs/platform-express';
import { UploadService } from 'src/upload/upload.service';
import { CompressionService } from './compression.service';
import { ApiConsumes, ApiBody, ApiOperation } from '@nestjs/swagger';

@Controller('compression')
export class CompressionController {
  constructor(
    private readonly fileCompressionService: CompressionService,
    private readonly fileUploadService: UploadService,
  ) {}

  multerOptionsInitialised = this.fileUploadService.multerOptions;

  @Post('upload')
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        file: {
          type: 'string',
          format: 'binary',
        },
      },
    },
  })
  @UseInterceptors(FileInterceptor('file'))
  @ApiOperation({ summary: 'Upload a file' })
  async uploadFile(@UploadedFile() file: Express.Multer.File) {
    // console.log(this.fileUploadService.multerOptions);
    // Handle file upload
    return { message: 'File uploaded successfully' };
  }

  @Post('compress')
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        file: {
          type: 'string',
          format: 'binary',
        },
      },
    },
  })
  @UseInterceptors(FileInterceptor('file'))
  @ApiOperation({ summary: 'Upload a file' })
  async compressFile(
    @UploadedFile() file: Express.Multer.File,
    @Res() res: Response,
  ) {
    console.log(file);

    // Compress the uploaded file
    await this.fileCompressionService.compressFile(
      file.path,
      file.path + '.gz',
    );

    const compressedFilePath = file.path + '.gz';

    // Send the compressed file for download
    res.download(compressedFilePath, `${file.originalname}.gz`, (err) => {
      if (err) {
        // Handle errors if necessary
        res.status(404).send('File not found');
      }
    });

    return { message: 'File compressed successfully' };
  }

  @Post('decompress')
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        file: {
          type: 'string',
          format: 'binary',
        },
      },
    },
  })
  @UseInterceptors(FileInterceptor('file'))
  @ApiOperation({ summary: 'Decompress a compressed file' })
  async decompressFile(
    @UploadedFile() file: Express.Multer.File,
    @Res() res: Response,
  ) {
    // Decompress the uploaded file
    await this.fileCompressionService.decompressFile(
      file.path,
      file.path.replace('.gz', ''),
    );
    const decompressedFilePath = file.path.replace('.gz', '');

    console.log(file);

    // Send the decompressed file for download
    res.download(decompressedFilePath, file.originalname, (err) => {
      if (err) {
        // Handle errors if necessary
        res.status(404).send('File not found');
      }
    });

    return { message: 'File decompressed successfully' };
  }
}
