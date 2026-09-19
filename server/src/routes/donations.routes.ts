import { Router, Request, Response } from 'express';
import { DonationsController } from '../controllers/donations.controller';
import { authenticate } from '../middleware/auth';

const router = Router();
const donationsController = new DonationsController();

// Route to create a new donation
router.post('/', authenticate, (req: Request, res: Response) => donationsController.createDonation(req, res));

// Route to get all donations
router.get('/', (req: Request, res: Response) => donationsController.getDonations(req, res));

// Route to get a specific donation by ID
router.get('/:id', (req: Request, res: Response) => donationsController.getDonationById(req, res));

// Route to update a donation
router.put('/:id', authenticate, (req: Request, res: Response) => donationsController.updateDonation(req, res));

// Route to delete a donation
router.delete('/:id', authenticate, (req: Request, res: Response) => donationsController.deleteDonation(req, res));

export default router;