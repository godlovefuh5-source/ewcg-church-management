import { Request, Response } from 'express';
import { GalleryService } from '../services/gallery.service';

class GalleryController {
    private galleryService: GalleryService;

    constructor() {
        this.galleryService = new GalleryService();
    }

    public async getAllImages(req: Request, res: Response): Promise<void> {
        try {
            const images = await this.galleryService.getAllImages();
            res.status(200).json({
                success: true,
                data: images,
            });
        } catch (error) {
            res.status(500).json({
                success: false,
                message: 'Unable to retrieve images',
                errors: [error.message],
            });
        }
    }

    public async uploadImage(req: Request, res: Response): Promise<void> {
        try {
            const image = await this.galleryService.uploadImage(req.file);
            res.status(201).json({
                success: true,
                data: image,
            });
        } catch (error) {
            res.status(500).json({
                success: false,
                message: 'Unable to upload image',
                errors: [error.message],
            });
        }
    }

    public async deleteImage(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        try {
            await this.galleryService.deleteImage(id);
            res.status(204).send();
        } catch (error) {
            res.status(500).json({
                success: false,
                message: 'Unable to delete image',
                errors: [error.message],
            });
        }
    }
}

export const galleryController = new GalleryController();