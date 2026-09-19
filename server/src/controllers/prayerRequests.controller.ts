import { Request, Response } from 'express';
import { PrayerRequestService } from '../services/prayerRequest.service';

class PrayerRequestController {
    async createPrayerRequest(req: Request, res: Response) {
        try {
            const prayerRequestData = req.body;
            const newPrayerRequest = await PrayerRequestService.createPrayerRequest(prayerRequestData);
            return res.status(201).json({
                success: true,
                message: 'Prayer request created successfully',
                data: newPrayerRequest,
            });
        } catch (error) {
            return res.status(500).json({
                success: false,
                message: 'Unable to create prayer request',
                errors: [error.message],
            });
        }
    }

    async getAllPrayerRequests(req: Request, res: Response) {
        try {
            const prayerRequests = await PrayerRequestService.getAllPrayerRequests();
            return res.status(200).json({
                success: true,
                data: prayerRequests,
            });
        } catch (error) {
            return res.status(500).json({
                success: false,
                message: 'Unable to retrieve prayer requests',
                errors: [error.message],
            });
        }
    }

    async getPrayerRequestById(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const prayerRequest = await PrayerRequestService.getPrayerRequestById(id);
            if (!prayerRequest) {
                return res.status(404).json({
                    success: false,
                    message: 'Prayer request not found',
                });
            }
            return res.status(200).json({
                success: true,
                data: prayerRequest,
            });
        } catch (error) {
            return res.status(500).json({
                success: false,
                message: 'Unable to retrieve prayer request',
                errors: [error.message],
            });
        }
    }

    async deletePrayerRequest(req: Request, res: Response) {
        try {
            const { id } = req.params;
            await PrayerRequestService.deletePrayerRequest(id);
            return res.status(204).json({
                success: true,
                message: 'Prayer request deleted successfully',
            });
        } catch (error) {
            return res.status(500).json({
                success: false,
                message: 'Unable to delete prayer request',
                errors: [error.message],
            });
        }
    }
}

export const prayerRequestController = new PrayerRequestController();