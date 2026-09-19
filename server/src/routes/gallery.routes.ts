import { Router, Request, Response } from 'express';
import { galleryController } from '../controllers/gallery.controller';
import { authenticate } from '../middleware/auth';

const router = Router();

// Public routes
router.get('/', (req: Request, res: Response) => galleryController.getAllImages(req, res));
router.get('/:id', (req: Request, res: Response) => res.status(200).json({success: true, message: 'Get single image not implemented'}));

// Admin routes
router.use(authenticate);
router.post('/', (req: Request, res: Response) => galleryController.uploadImage(req, res));
router.put('/:id', (req: Request, res: Response) => res.status(200).json({success: true, message: 'Update image not implemented'}));
router.delete('/:id', (req: Request, res: Response) => galleryController.deleteImage(req, res));

export default router;