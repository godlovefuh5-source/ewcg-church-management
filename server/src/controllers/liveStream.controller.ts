import { Request, Response } from 'express';
import { LiveStreamService } from '../services/liveStream.service';

class LiveStreamController {
    async getLiveStreamSettings(req: Request, res: Response) {
        try {
            const settings = await LiveStreamService.getSettings();
            res.status(200).json({
                success: true,
                data: settings,
            });
        } catch (error) {
            res.status(500).json({
                success: false,
                message: 'Failed to retrieve live stream settings',
                errors: [error.message],
            });
        }
    }

    async updateLiveStreamSettings(req: Request, res: Response) {
        try {
            const updatedSettings = await LiveStreamService.updateSettings(req.body);
            res.status(200).json({
                success: true,
                message: 'Live stream settings updated successfully',
                data: updatedSettings,
            });
        } catch (error) {
            res.status(500).json({
                success: false,
                message: 'Failed to update live stream settings',
                errors: [error.message],
            });
        }
    }

    async startLiveStream(req: Request, res: Response) {
        try {
            const streamData = await LiveStreamService.startStream(req.body);
            res.status(200).json({
                success: true,
                message: 'Live stream started successfully',
                data: streamData,
            });
        } catch (error) {
            res.status(500).json({
                success: false,
                message: 'Failed to start live stream',
                errors: [error.message],
            });
        }
    }

    async stopLiveStream(req: Request, res: Response) {
        try {
            await LiveStreamService.stopStream();
            res.status(200).json({
                success: true,
                message: 'Live stream stopped successfully',
            });
        } catch (error) {
            res.status(500).json({
                success: false,
                message: 'Failed to stop live stream',
                errors: [error.message],
            });
        }
    }
}

export const liveStreamController = new LiveStreamController();