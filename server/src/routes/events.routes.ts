import { Router, Request, Response } from 'express';
import { EventController } from '../controllers/events.controller';
import { authenticate } from '../middleware/auth';

const router = Router();
const eventController = new EventController();

// Public routes
router.get('/', (req: Request, res: Response) => eventController.getAllEvents(req, res));
router.get('/:id', (req: Request, res: Response) => eventController.getEventById(req, res));

// Protected routes
router.use(authenticate);
router.post('/', (req: Request, res: Response) => eventController.createEvent(req, res));
router.put('/:id', (req: Request, res: Response) => eventController.updateEvent(req, res));
router.delete('/:id', (req: Request, res: Response) => eventController.deleteEvent(req, res));

export default router;