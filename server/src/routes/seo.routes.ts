import { Router, Request, Response } from 'express';
import { generateSitemap, generateRobotsTxt, getDefaultSitemapEntries } from '../utils/seo';

const router = Router();

/**
 * GET /robots.txt
 */
router.get('/robots.txt', (req: Request, res: Response) => {
    const domain = process.env.CLIENT_URL || 'http://localhost:3000';
    const robotsTxt = generateRobotsTxt(domain);

    res.type('text/plain');
    res.send(robotsTxt);
});

/**
 * GET /sitemap.xml
 */
router.get('/sitemap.xml', (req: Request, res: Response) => {
    const domain = process.env.CLIENT_URL || 'http://localhost:3000';
    const entries = getDefaultSitemapEntries();
    const sitemap = generateSitemap(entries, domain);

    res.type('application/xml');
    res.send(sitemap);
});

export default router;
