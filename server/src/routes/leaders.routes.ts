import { Router, Request, Response } from 'express';
import { LeaderController } from '../controllers/leaders.controller';
import { authorize } from '../middleware/authorize';

const router = Router();
const leaderController = new LeaderController();

// Get all leaders
router.get('/', (req: Request, res: Response) => leaderController.getAllLeaders(req, res));

// Get a leader by ID
router.get('/:id', (req: Request, res: Response) => leaderController.getLeaderById(req, res));

// Create a new leader
router.post('/', authorize('ADMIN', 'SUPER_ADMIN'), (req: Request, res: Response) => leaderController.createLeader(req, res));

// Update a leader
router.put('/:id', authorize('ADMIN', 'SUPER_ADMIN'), (req: Request, res: Response) => leaderController.updateLeader(req, res));

// Delete a leader
router.delete('/:id', authorize('SUPER_ADMIN'), (req: Request, res: Response) => leaderController.deleteLeader(req, res));

export default router;