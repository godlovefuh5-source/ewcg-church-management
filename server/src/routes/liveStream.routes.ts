import { Router, Request, Response } from 'express';
import { liveStreamController } from '../controllers/liveStream.controller';
import { authenticate, authorize } from '../middleware/auth';

const router = Router();

// Get live stream settings
router.get('/', authenticate, authorize('ADMIN', 'SUPER_ADMIN'), (req: Request, res: Response) => liveStreamController.getLiveStreamSettings(req, res));

// Update live stream settings
router.put('/', authenticate, authorize('ADMIN', 'SUPER_ADMIN'), (req: Request, res: Response) => liveStreamController.updateLiveStreamSettings(req, res));

export default router;