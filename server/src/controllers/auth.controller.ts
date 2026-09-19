import { Request, Response } from 'express';
import { AuthService } from '../services/auth.service';
import { User } from '../types/auth';
import { validateLogin, validateRegister } from '../validators/auth.validator';

class AuthController {
    private authService: AuthService;

    constructor() {
        this.authService = new AuthService();
    }

    public async login(req: Request, res: Response): Promise<void> {
        const { error } = validateLogin(req.body);
        if (error) {
            res.status(400).json({ success: false, message: error.details[0].message });
            return;
        }

        const { email, password } = req.body;
        try {
            const token = await this.authService.login(email, password);
            res.status(200).json({ success: true, token });
        } catch (err) {
            res.status(401).json({ success: false, message: err.message });
        }
    }

    public async register(req: Request, res: Response): Promise<void> {
        const { error } = validateRegister(req.body);
        if (error) {
            res.status(400).json({ success: false, message: error.details[0].message });
            return;
        }

        const user: User = req.body;
        try {
            const newUser = await this.authService.register(user);
            res.status(201).json({ success: true, data: newUser });
        } catch (err) {
            res.status(500).json({ success: false, message: err.message });
        }
    }

    public async logout(req: Request, res: Response): Promise<void> {
        res.clearCookie('token');
        res.status(200).json({ success: true, message: 'Logged out successfully' });
    }

    public async me(req: Request, res: Response): Promise<void> {
        const user = req.user; // Assuming user is set in middleware
        res.status(200).json({ success: true, data: user });
    }
}

export default new AuthController();