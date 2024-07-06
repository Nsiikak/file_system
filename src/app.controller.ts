// import {
//   Controller,
//   FileTypeValidator,
//   Get,
//   MaxFileSizeValidator,
//   ParseFilePipe,
//   Post,
//   UploadedFile,
//   UseInterceptors,
// } from '@nestjs/common';
// import { AppService } from './app.service';
// import { FileInterceptor } from '@nestjs/platform-express';

// @Controller()
// export class AppController {
//   constructor(private readonly appService: AppService) {}

//   @Get()
//   getHello(): string {
//     return this.appService.getHello();
//   }
//   @Post('upload')
//   @UseInterceptors(FileInterceptor('file'))
//   uploadFile(
//     @UploadedFile(
//       new ParseFilePipe({
//         validators: [
//           new MaxFileSizeValidator({ maxSize: 100000000000000 }),
//           new FileTypeValidator({ fileType: 'doc' }),
//         ],
//       }),
//     )
//     file: Express.Multer.File,
//   ) {
//     console.log(file);
//   }
// }
