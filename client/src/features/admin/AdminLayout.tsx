import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';
import PageLayout from '../../components/layout/PageLayout';

const AdminLayout: React.FC = () => {
    return (
        <PageLayout>
            <Navbar />
            <div className="admin-content">
                <Outlet />
            </div>
            <Footer />
        </PageLayout>
    );
};

export default AdminLayout;