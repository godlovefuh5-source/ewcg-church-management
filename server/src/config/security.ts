/**
 * Security configuration
 */

export const securityConfig = {
    // Password
    passwordHashRounds: 10,
    passwordMinLength: 8,

    // Sessions
    sessionTimeout: 30 * 24 * 60 * 60 * 1000, // 30 days
    sessionSecure: process.env.NODE_ENV === 'production',
    sessionSameSite: 'strict' as const,

    // Rate limiting
    loginAttempts: 5,
    loginWindowMs: 15 * 60 * 1000, // 15 minutes
    apiRateLimit: 100,
    apiRateLimitWindowMs: 60 * 60 * 1000, // 1 hour

    // JWT
    jwtExpiry: '7d',
    jwtRefreshExpiry: '30d',

    // CORS
    allowedOrigins: [
        process.env.CLIENT_URL || 'http://localhost:3000',
        'https://ewcg-church.org',
        'https://www.ewcg-church.org',
    ],

    // API Keys
    publicEndpoints: ['/api/auth/login', '/api/auth/register', '/api/sermons', '/api/events', '/robots.txt', '/sitemap.xml'],
    protectedEndpoints: ['/api/admin', '/api/settings', '/api/donations'],

    // Data encryption
    encryptionAlgorithm: 'aes-256-gcm',

    // Bot protection
    enableBotProtection: true,
    botProtectionThreshold: 0.5,
};
