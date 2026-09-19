import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AdminLayout from './AdminLayout';
import DashboardPage from './DashboardPage';
import SermonsModule from './modules/SermonsModule';
import EventsModule from './modules/EventsModule';
import ServicesModule from './modules/ServicesModule';
import MinistriesModule from './modules/MinistriesModule';
import LeadershipModule from './modules/LeadershipModule';
import GalleryModule from './modules/GalleryModule';
import DonationsModule from './modules/DonationsModule';
import LiveStreamModule from './modules/LiveStreamModule';
import PrayerRequestsModule from './modules/PrayerRequestsModule';
import MessagesModule from './modules/MessagesModule';
import AnnouncementsModule from './modules/AnnouncementsModule';
import UsersModule from './modules/UsersModule';
import SettingsModule from './modules/SettingsModule';

const AdminRoutes = () => {
    return (
        <AdminLayout>
            <Routes>
                <Route path="/" element={<DashboardPage />} />
                <Route path="sermons/*" element={<SermonsModule />} />
                <Route path="events/*" element={<EventsModule />} />
                <Route path="services/*" element={<ServicesModule />} />
                <Route path="ministries/*" element={<MinistriesModule />} />
                <Route path="leadership/*" element={<LeadershipModule />} />
                <Route path="gallery/*" element={<GalleryModule />} />
                <Route path="donations/*" element={<DonationsModule />} />
                <Route path="live-stream/*" element={<LiveStreamModule />} />
                <Route path="prayer-requests/*" element={<PrayerRequestsModule />} />
                <Route path="messages/*" element={<MessagesModule />} />
                <Route path="announcements/*" element={<AnnouncementsModule />} />
                <Route path="users/*" element={<UsersModule />} />
                <Route path="settings/*" element={<SettingsModule />} />
            </Routes>
        </AdminLayout>
    );
};

export default AdminRoutes;