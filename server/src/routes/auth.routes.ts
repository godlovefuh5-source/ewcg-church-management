import { Router, Request, Response } from 'express';
import authController from '../controllers/auth.controller';

const router = Router();

// User login route
router.post('/login', (req: Request, res: Response) => authController.login(req, res));

// User registration route
router.post('/register', (req: Request, res: Response) => authController.register(req, res));

export default router;