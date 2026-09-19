import { Router } from 'express';
import authRoutes from './auth.routes';
import adminRoutes from './admin.routes';
import contactRoutes from './contact.routes';
import donationsRoutes from './donations.routes';
import eventsRoutes from './events.routes';
import galleryRoutes from './gallery.routes';
import leadersRoutes from './leaders.routes';
import liveStreamRoutes from './liveStream.routes';
import ministriesRoutes from './ministries.routes';
import prayerRequestsRoutes from './prayerRequests.routes';
import sermonsRoutes from './sermons.routes';
import servicesRoutes from './services.routes';
import settingsRoutes from './settings.routes';
import seoRoutes from './seo.routes';

const router = Router();

// SEO routes (robots.txt, sitemap.xml)
router.use(seoRoutes);

// Auth routes
router.use('/auth', authRoutes);

// Admin routes
router.use('/admin', adminRoutes);

// Church content routes
router.use('/contact', contactRoutes);
router.use('/donations', donationsRoutes);
router.use('/events', eventsRoutes);
router.use('/gallery', galleryRoutes);
router.use('/leaders', leadersRoutes);
router.use('/live-stream', liveStreamRoutes);
router.use('/ministries', ministriesRoutes);
router.use('/prayer-requests', prayerRequestsRoutes);
router.use('/sermons', sermonsRoutes);
router.use('/services', servicesRoutes);
router.use('/settings', settingsRoutes);

export default router;
