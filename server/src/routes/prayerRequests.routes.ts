import { Router, Request, Response } from 'express';
import { prayerRequestController } from '../controllers/prayerRequests.controller';
import { authenticate } from '../middleware/auth';

const router = Router();

// Route to create a new prayer request
router.post('/', authenticate, (req: Request, res: Response) => prayerRequestController.createPrayerRequest(req, res));

// Route to get all prayer requests
router.get('/', (req: Request, res: Response) => prayerRequestController.getAllPrayerRequests(req, res));

// Route to get a specific prayer request by ID
router.get('/:id', (req: Request, res: Response) => prayerRequestController.getPrayerRequestById(req, res));

// Route to update a prayer request by ID
router.put('/:id', authenticate, (req: Request, res: Response) => res.status(200).json({success: true, message: 'Update not implemented'}));

// Route to delete a prayer request by ID
router.delete('/:id', authenticate, (req: Request, res: Response) => prayerRequestController.deletePrayerRequest(req, res));

export default router;