import { Router, Request, Response } from 'express';
import { sermonsController } from '../controllers/sermons.controller';
import { authenticate } from '../middleware/auth';

const router = Router();

// Public routes
router.get('/', (req: Request, res: Response) => sermonsController.getAllSermons(req, res));
router.get('/:id', (req: Request, res: Response) => sermonsController.getSermonById(req, res));

// Protected routes
router.use(authenticate);
router.post('/', (req: Request, res: Response) => sermonsController.createSermon(req, res));
router.put('/:id', (req: Request, res: Response) => sermonsController.updateSermon(req, res));
router.delete('/:id', (req: Request, res: Response) => sermonsController.deleteSermon(req, res));

export default router;