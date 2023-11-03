// if (!file) throw new BadRequestException('File not uploaded');

// console.log(file);

// let zipFileName = `${Date.now}.gz`;

// // Compress the uploaded file
// await this.fileCompressionService.compressFile(file.path, zipFileName);

// const compressedFilePath = `uploads/${zipFileName}`;

// // Send the compressed file for download
// res.download(compressedFilePath, `${file.originalname}.gz`, (err) => {
//   if (err) {
//     // Handle errors if necessary
//     res.status(404).send('File not found');
//   }
// });

// return SuccessMsgResponse('File compressed successfully');