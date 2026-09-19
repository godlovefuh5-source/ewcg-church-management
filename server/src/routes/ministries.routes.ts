import { Router, Request, Response } from 'express';
import { MinistriesController } from '../controllers/ministries.controller';
import { authenticate } from '../middleware/auth';

const router = Router();
const ministriesController = new MinistriesController();

// Public routes
router.get('/', (req: Request, res: Response) => ministriesController.getAllMinistries(req, res));
router.get('/:id', (req: Request, res: Response) => ministriesController.getMinistryById(req, res));

// Protected routes
router.use(authenticate);
router.post('/', (req: Request, res: Response) => ministriesController.createMinistry(req, res));
router.put('/:id', (req: Request, res: Response) => ministriesController.updateMinistry(req, res));
router.delete('/:id', (req: Request, res: Response) => ministriesController.deleteMinistry(req, res));

export default router;