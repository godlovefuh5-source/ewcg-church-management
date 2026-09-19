import express from 'express';
import cors from 'cors';
import { json, urlencoded } from 'body-parser';
import { createServer } from 'http';
import { config } from './config/app';
import routes from './routes';
import { errorHandler, notFound } from './middleware/errorHandler';
import logger from './config/logger';

const app = express();
const server = createServer(app);

// Middleware
app.use(cors());
app.use(json());
app.use(urlencoded({ extended: true }));

// Routes
app.use('/api', routes);

// Error handling middleware
app.use(notFound);
app.use(errorHandler);

// Start server
const PORT = config.port || 5000;
server.listen(PORT, () => {
    logger.info(`Server is running on http://localhost:${PORT}`);
});

export default app;