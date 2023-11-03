# File Compression and Decompression API

## Description

The File Compression and Decompression API is a NestJS-based solution for handling file compression and decompression. This API allows users to upload small files, compress them using the gzip format, and decompress them when needed. It simplifies file management and storage by reducing file sizes for storage and transfer. The live version of the API is hosted at [Live Version](https://file-compression-and-decompression.onrender.com).

## Installation

To get started, install the project dependencies using npm:

```bash
$ npm install
```

Create an `.env` file in the project root directory with the following contents and adjust configurations as needed:

```env
PORT=xxxx
MONGO_DB_NAME=xxxx
MONGO_DB_URL=xxxx
```

## Running the App

You can run the application in different modes:

- Development Mode:

```bash
$ npm run start:dev
```

- Production Mode:

```bash
$ npm run start:prod
```

## Usage

The API provides endpoints for uploading, compressing, and decompressing files. Detailed usage instructions can be found in the API documentation, or you can explore the API interactively.

## API Documentation

For comprehensive documentation on the API and its endpoints, please access the Swagger documentation at:

[Swagger Documentation](https://file-compression-and-decompression.onrender.com/docs)

The Swagger documentation offers insights into available endpoints, request parameters, and response structures, simplifying interaction with the API.

## Features

- **File Upload:** Users can upload small files to the API for compression and decompression.

- **File Compression:** The API supports compressing uploaded files using the gzip format, reducing file sizes for storage and transfer.

- **File Decompression:** Users can decompress previously compressed files to their original state.

- **File Deletion:** Compressed files are deleted after they are successfully downloaded, helping to save server storage.

## Contributing

Contributions to the File Compression and Decompression API are welcome! If you'd like to contribute:

1. Fork the project on GitHub.

2. Create a new branch for your changes.

3. Make your improvements or additions.

4. Test your changes thoroughly.

5. Create a pull request with a clear description of your changes.

Please be cautious with file handling and deletion to ensure data privacy and security.
