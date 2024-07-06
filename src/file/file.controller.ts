import {
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Req,
  Res,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
// import { FileService } from './file.service';
import { FilesInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { editFileName, imageFileFilter } from './utils';
import * as fs from 'fs';

@Controller('file')
export class FileController {
  @Post('multiple')
  @UseInterceptors(
    FilesInterceptor('image', 3, {
      storage: diskStorage({
        destination: './src/uploads',
        filename: editFileName,
      }),
      fileFilter: imageFileFilter,
    }),
  )
  async uploadMultipleFiles(@UploadedFiles() files) {
    const response = [];
    files.forEach((file) => {
      const fileResponse = {
        originalname: file.originalname,
        filename: file.filename,
      };
      response.push(fileResponse);
    });
    return response;
  }
  @Get(':imgpath')
  seeUploadedFile(@Param('imgpath') image, @Res() res) {
    return res.sendFile(image, { root: './src/uploads' });
  }
  @Delete(':imgpath')
  deleteImg(@Param('imgpath') image, @Req() req, @Res() res): Promise<string> {
    fs.rm('./src/uploads/' + image, (err) => {
      if (err) {
        throw err;
      }
    });
    return res.end(`successfully deleted ${image}`);
  }
}
