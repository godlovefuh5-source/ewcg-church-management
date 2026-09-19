import { PrismaClient } from '@prisma/client';
import { GalleryImage } from '../types/prisma';

const prisma = new PrismaClient();

export class GalleryRepository {
    async getAllImages(): Promise<GalleryImage[]> {
        return await prisma.galleryImage.findMany();
    }

    async getImageById(id: string): Promise<GalleryImage | null> {
        return await prisma.galleryImage.findUnique({
            where: { id },
        });
    }

    async createImage(data: Omit<GalleryImage, 'id'>): Promise<GalleryImage> {
        return await prisma.galleryImage.create({
            data,
        });
    }

    async updateImage(id: string, data: Partial<Omit<GalleryImage, 'id'>>): Promise<GalleryImage> {
        return await prisma.galleryImage.update({
            where: { id },
            data,
        });
    }

    async deleteImage(id: string): Promise<GalleryImage> {
        return await prisma.galleryImage.delete({
            where: { id },
        });
    }
}