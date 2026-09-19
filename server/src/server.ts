import express from 'express';
import helmet from 'helmet';
import { config } from './config/app';
import { connectDatabase } from './config/env';
import cors from './config/cors';
import logger from './config/logger';
import routes from './routes';
import { errorHandler, notFound } from './middleware/errorHandler';
import { securityHeaders, enforceHttps, createRateLimiter } from './middleware/security';

const app = express();

// Trust proxy in production
if (process.env.NODE_ENV === 'production') {
    app.set('trust proxy', 1);
}

// Security middleware
app.use(helmet()); // Adds various HTTP headers
app.use(securityHeaders); // Custom security headers
app.use(enforceHttps); // Force HTTPS in production

// Request processing middleware
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// CORS
app.use(cors);

// Logging
app.use(logger);

// Rate limiting for login attempts
const loginRateLimiter = createRateLimiter(15 * 60 * 1000, 5); // 5 attempts per 15 minutes
app.use('/api/auth/login', loginRateLimiter);

// API Routes
app.use('/api', routes);

// Serve robots.txt and sitemap from root
app.use((req, res, next) => {
    if (req.path === '/robots.txt' || req.path === '/sitemap.xml') {
        return routes(req, res, next);
    }
    next();
});

// 404 handling
app.use(notFound);

// Error handling middleware (must be last)
app.use(errorHandler);

// Start the server
const PORT = process.env.PORT || (config && config.port) || 5000;

const server = app.listen(PORT, () => {
    console.log(`🚀 Server is running on http://localhost:${PORT}`);
    console.log(`🔒 Security: HTTPS ${process.env.NODE_ENV === 'production' ? 'enforced' : 'dev mode'}`);
    console.log(`📊 Database connecting...`);
    connectDatabase().catch(err => console.error('Database connection failed:', err));
});

// Handle graceful shutdown
process.on('SIGTERM', () => {
    console.log('SIGTERM received. Shutting down gracefully...');
    server.close(() => {
        console.log('Server closed');
        process.exit(0);
    });
});

export default app;