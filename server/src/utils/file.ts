import fs from 'fs';
import path from 'path';
import { promisify } from 'util';

const fsPromises = {
  writeFile: promisify(fs.writeFile),
  readFile: promisify(fs.readFile),
  unlink: promisify(fs.unlink),
  mkdir: promisify(fs.mkdir),
  readdir: promisify(fs.readdir),
};

const uploadDir = path.join(__dirname, '../../uploads');

export const createUploadDir = async () => {
  try {
    await fsPromises.mkdir(uploadDir, { recursive: true });
  } catch (error) {
    console.error('Error creating upload directory:', error);
  }
};

export const saveFile = async (fileName: string, data: Buffer) => {
  const filePath = path.join(uploadDir, fileName);
  await fsPromises.writeFile(filePath, data);
  return filePath;
};

export const deleteFile = async (fileName: string) => {
  const filePath = path.join(uploadDir, fileName);
  try {
    await fsPromises.unlink(filePath);
  } catch (error) {
    console.error('Error deleting file:', error);
  }
};

export const listFiles = async () => {
  try {
    return await fsPromises.readdir(uploadDir);
  } catch (error) {
    console.error('Error listing files:', error);
    return [];
  }
};