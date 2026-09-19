import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from '../features/home/HomePage';
import AboutPage from '../features/about/AboutPage';
import ServicesPage from '../features/services/ServicesPage';
import SermonsPage from '../features/sermons/SermonsPage';
import SermonDetailPage from '../features/sermons/SermonDetailPage';
import EventsPage from '../features/events/EventsPage';
import EventDetailPage from '../features/events/EventDetailPage';
import MinistriesPage from '../features/ministries/MinistriesPage';
import MinistryDetailPage from '../features/ministries/MinistryDetailPage';
import GivePage from '../features/give/GivePage';
import ContactPage from '../features/contact/ContactPage';
import LiveStreamPage from '../features/live/LiveStreamPage';
import PrayerRequestPage from '../features/prayer/PrayerRequestPage';
import GalleryPage from '../features/gallery/GalleryPage';
import AdminLoginPage from '../features/admin/AdminLoginPage';
import AdminLayout from '../features/admin/AdminLayout';
import DashboardPage from '../features/admin/DashboardPage';
import ProtectedRoute from '../features/auth/ProtectedRoute';

const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/services" element={<ServicesPage />} />
                <Route path="/sermons" element={<SermonsPage />} />
                <Route path="/sermons/:id" element={<SermonDetailPage />} />
                <Route path="/events" element={<EventsPage />} />
                <Route path="/events/:id" element={<EventDetailPage />} />
                <Route path="/ministries" element={<MinistriesPage />} />
                <Route path="/ministries/:id" element={<MinistryDetailPage />} />
                <Route path="/give" element={<GivePage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/live" element={<LiveStreamPage />} />
                <Route path="/prayer" element={<PrayerRequestPage />} />
                <Route path="/gallery" element={<GalleryPage />} />
                <Route path="/admin/login" element={<AdminLoginPage />} />
                <Route path="/admin" element={<ProtectedRoute><AdminLayout /></ProtectedRoute>}>
                    <Route path="dashboard" element={<DashboardPage />} />
                </Route>
            </Routes>
        </Router>
    );
};

export default AppRoutes;