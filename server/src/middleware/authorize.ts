import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

export const authorize = (...roles: string[]) => {
    return (req: Request, res: Response, next: NextFunction) => {
        const token = req.headers.authorization?.split(' ')[1] || (req as any).cookies?.token;

        if (!token) {
            return res.status(401).json({ success: false, message: 'Unauthorized: No token provided' });
        }

        try {
            const decoded: any = jwt.verify(token, process.env.JWT_SECRET as string);

            if (roles.length > 0 && !roles.includes(decoded.role)) {
                return res.status(403).json({ success: false, message: 'Forbidden: Insufficient permissions' });
            }

            (req as any).user = decoded;
            next();
        } catch (error) {
            return res.status(403).json({ success: false, message: 'Forbidden: Invalid token' });
        }
    };
};

export default authorize;