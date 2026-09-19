/**
 * Logger configuration
 * Falls back to console logging if winston is not available
 */

let logger: any;

try {
  const { createLogger, format, transports } = require('winston');

  logger = createLogger({
    level: 'info',
    format: format.combine(
      format.timestamp(),
      format.printf(({ timestamp, level, message }: any) => {
        return `${timestamp} [${level}]: ${message}`;
      })
    ),
    transports: [
      new transports.Console(),
      new transports.File({ filename: 'error.log', level: 'error' }),
      new transports.File({ filename: 'combined.log' }),
    ],
  });
} catch (error) {
  // Fallback logger
  logger = {
    info: (message: string) => console.log(`[INFO] ${new Date().toISOString()}: ${message}`),
    error: (message: string, error?: any) => console.error(`[ERROR] ${new Date().toISOString()}: ${message}`, error),
    warn: (message: string) => console.warn(`[WARN] ${new Date().toISOString()}: ${message}`),
    debug: (message: string) => console.debug(`[DEBUG] ${new Date().toISOString()}: ${message}`),
  };
}

export { logger };
export default logger;