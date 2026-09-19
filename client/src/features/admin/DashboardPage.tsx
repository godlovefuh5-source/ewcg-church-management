import React from 'react';
import DashboardOverview from './DashboardOverview';
import { useAuth } from '../../hooks/useAuth';

const DashboardPage: React.FC = () => {
    const { user } = useAuth();

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
            <p className="mb-6">Welcome, {user?.name}!</p>
            <DashboardOverview />
        </div>
    );
};

export default DashboardPage;