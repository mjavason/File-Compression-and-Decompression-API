import {
  BadRequestException,
  Controller,
  HttpStatus,
  NotFoundException,
  Post,
  Res,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { Response } from 'express';
import { FileInterceptor } from '@nestjs/platform-express';
import { CompressionService } from './compression.service';
import {
  ApiConsumes,
  ApiBody,
  ApiOperation,
  ApiInternalServerErrorResponse,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import * as fs from 'fs';
import { storage } from 'src/constants';

@ApiTags('Compression')
@ApiResponse({
  status: HttpStatus.OK,
  description: 'Successful response with data',
})
@ApiInternalServerErrorResponse({ description: 'Internal Server Error' })
@Controller('compression')
export class CompressionController {
  constructor(private readonly fileCompressionService: CompressionService) {}

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
  @UseInterceptors(FileInterceptor('file', { storage }))
  @ApiOperation({ summary: 'Upload a file' })
  async uploadFile(@UploadedFile() file: Express.Multer.File) {
    if (!file) throw new BadRequestException('File not uploaded');

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
  @UseInterceptors(FileInterceptor('file', { storage }))
  @ApiOperation({ summary: 'Upload a file to be compressed' })
  async compressFile(
    @UploadedFile() file: Express.Multer.File,
    @Res() res: Response,
  ) {
    if (!file) throw new BadRequestException('File not uploaded');

    const compressedFilePath = file.path + '.gz';

    // Compress the uploaded file
    await this.fileCompressionService.compressFile(
      file.path,
      compressedFilePath,
    );

    // Send the compressed file for download
    res.download(compressedFilePath, `${file.originalname}.gz`, (err) => {
      if (err) {
        // Handle errors if necessary
        throw new NotFoundException('File not found');
      } else {
        // Delete the compressed file after it has been sent for download
        fs.unlink(compressedFilePath, (err) => {
          if (err)
            console.error(`Error deleting the compressed file: ${err.message}`);
        });

        // Delete the uploaded file
        fs.unlink(file.path, (err) => {
          if (err)
            console.error(`Error deleting the uploaded file: ${err.message}`);
        });
      }
    });
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
  @UseInterceptors(FileInterceptor('file', { storage }))
  @ApiOperation({ summary: 'Decompress a compressed file' })
  async decompressFile(
    @UploadedFile() file: Express.Multer.File,
    @Res() res: Response,
  ) {
    if (!file) throw new BadRequestException('File not uploaded');

    // Decompress the uploaded file
    await this.fileCompressionService.decompressFile(
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      file.path,
      file.path.replace('.gz', ''),
    );
    const decompressedFilePath = file.path.replace('.gz', '');
    const baseFileName = this.fileCompressionService.stripFileExtension(
      file.originalname,
    );

    // Send the decompressed file for download
    return res.download(decompressedFilePath, baseFileName, (err) => {
      if (err) {
        // Handle errors if necessary
        throw new BadRequestException(
          `Error decompressing file: ${err.message}`,
        );
      } else {
        // Delete the compressed file after it has been sent for download
        fs.unlink(decompressedFilePath, (err) => {
          if (err)
            console.error(`Error deleting the compressed file: ${err.message}`);
        });

        // Delete the uploaded file
        fs.unlink(file.path, (err) => {
          if (err)
            console.error(`Error deleting the uploaded file: ${err.message}`);
        });
      }
    });
  }
}
