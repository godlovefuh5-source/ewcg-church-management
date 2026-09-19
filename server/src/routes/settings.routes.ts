import { Router, Request, Response } from 'express';
import { settingsController } from '../controllers/settings.controller';
import { authenticate } from '../middleware/auth';

const router = Router();

// Get church settings
router.get('/', authenticate, (req: Request, res: Response) => settingsController.getSettings(req, res));

// Update church settings
router.put('/', authenticate, (req: Request, res: Response) => settingsController.updateSettings(req, res));

export default router;