import { Request, Response } from 'express';
import { DashboardService } from '../services/dashboard.service';

class DashboardController {
    async getDashboardOverview(req: Request, res: Response) {
        try {
            const overviewData = await DashboardService.getOverviewData();
            return res.status(200).json({
                success: true,
                message: 'Dashboard overview data retrieved successfully',
                data: overviewData,
            });
        } catch (error) {
            return res.status(500).json({
                success: false,
                message: 'Failed to retrieve dashboard overview data',
                errors: [error.message],
            });
        }
    }
}

export const dashboardController = new DashboardController();