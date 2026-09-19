import { GalleryImage } from '../types/prisma';
import { GalleryRepository } from '../repositories/gallery.repository';

export class GalleryService {
    private galleryRepository: GalleryRepository;

    constructor() {
        this.galleryRepository = new GalleryRepository();
    }

    async getAllImages(): Promise<GalleryImage[]> {
        return await this.galleryRepository.findAll();
    }

    async getImageById(id: string): Promise<GalleryImage | null> {
        return await this.galleryRepository.findById(id);
    }

    async createImage(data: Partial<GalleryImage>): Promise<GalleryImage> {
        return await this.galleryRepository.create(data);
    }

    async updateImage(id: string, data: Partial<GalleryImage>): Promise<GalleryImage | null> {
        return await this.galleryRepository.update(id, data);
    }

    async deleteImage(id: string): Promise<boolean> {
        return await this.galleryRepository.delete(id);
    }
}