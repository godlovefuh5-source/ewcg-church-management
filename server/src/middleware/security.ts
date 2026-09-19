import { Request, Response, NextFunction } from 'express';

/**
 * Add required security headers to all responses
 */
export const securityHeaders = (req: Request, res: Response, next: NextFunction) => {
    // Prevent MIME sniffing
    res.setHeader('X-Content-Type-Options', 'nosniff');

    // Enable HSTS (HTTP Strict Transport Security) - force HTTPS
    res.setHeader('Strict-Transport-Security', 'max-age=31536000; includeSubDomains; preload');

    // Prevent clickjacking
    res.setHeader('X-Frame-Options', 'DENY');

    // Enable XSS protection
    res.setHeader('X-XSS-Protection', '1; mode=block');

    // Referrer Policy
    res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');

    // Content Security Policy
    res.setHeader(
        'Content-Security-Policy',
        "default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self'; connect-src 'self' https:;"
    );

    // Feature Policy / Permissions Policy
    res.setHeader('Permissions-Policy', 'geolocation=(), microphone=(), camera=()');

    next();
};

/**
 * Enforce HTTPS in production
 */
export const enforceHttps = (req: Request, res: Response, next: NextFunction) => {
    if (process.env.NODE_ENV === 'production' && req.header('x-forwarded-proto') !== 'https') {
        return res.redirect(301, `https://${req.header('host')}${req.url}`);
    }
    next();
};

/**
 * Rate limiter for login attempts
 */
export const createRateLimiter = (windowMs: number, maxRequests: number) => {
    const store = new Map<string, { count: number; resetTime: number }>();

    return (req: Request, res: Response, next: NextFunction) => {
        const key = req.ip || 'unknown';
        const now = Date.now();

        const record = store.get(key);

        if (!record || record.resetTime < now) {
            store.set(key, { count: 1, resetTime: now + windowMs });
            return next();
        }

        record.count++;

        if (record.count > maxRequests) {
            return res.status(429).json({
                success: false,
                message: 'Too many requests, please try again later',
            });
        }

        next();
    };
};
