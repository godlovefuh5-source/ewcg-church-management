import { Request, Response } from 'express';
import { DashboardRepository } from '../repositories/dashboard.repository';

class DashboardService {
    private dashboardRepository: DashboardRepository;

    constructor() {
        this.dashboardRepository = new DashboardRepository();
    }

    async getDashboardStats(): Promise<any> {
        try {
            const totalSermons = await this.dashboardRepository.getTotalSermons();
            const totalEvents = await this.dashboardRepository.getTotalEvents();
            const totalMinistries = await this.dashboardRepository.getTotalMinistries();
            const totalDonations = await this.dashboardRepository.getTotalDonations();
            const totalPrayerRequests = await this.dashboardRepository.getTotalPrayerRequests();
            const totalContactMessages = await this.dashboardRepository.getTotalContactMessages();

            return {
                totalSermons,
                totalEvents,
                totalMinistries,
                totalDonations,
                totalPrayerRequests,
                totalContactMessages,
            };
        } catch (error) {
            throw new Error('Error fetching dashboard statistics');
        }
    }
}

export default new DashboardService();