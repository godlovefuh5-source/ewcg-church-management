import { Router, Request, Response } from 'express';
import { ContactController } from '../controllers/contact.controller';

const router = Router();
const contactController = new ContactController();

// Route to create a new contact message
router.post('/', (req: Request, res: Response) => contactController.submitContactForm(req, res));

// Route to get all contact messages (admin only)
router.get('/', (req: Request, res: Response) => contactController.getContactMessages(req, res));

export default router;