import React, { useEffect, useState } from 'react';
import { fetchDashboardOverview } from '../../services/api';
import { DashboardStats } from './DashboardStats';

const DashboardOverview: React.FC = () => {
    const [stats, setStats] = useState({
        totalSermons: 0,
        totalEvents: 0,
        totalMinistries: 0,
        totalDonations: 0,
        totalPrayerRequests: 0,
    });

    useEffect(() => {
        const getDashboardData = async () => {
            try {
                const data = await fetchDashboardOverview();
                setStats(data);
            } catch (error) {
                console.error('Error fetching dashboard overview:', error);
            }
        };

        getDashboardData();
    }, []);

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Dashboard Overview</h1>
            <DashboardStats stats={stats} />
        </div>
    );
};

export default DashboardOverview;