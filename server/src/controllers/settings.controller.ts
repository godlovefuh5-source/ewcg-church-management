import { Request, Response } from 'express';
import { SettingsService } from '../services/settings.service';

class SettingsController {
    private settingsService: SettingsService;

    constructor() {
        this.settingsService = new SettingsService();
    }

    public async getSettings(req: Request, res: Response): Promise<void> {
        try {
            const settings = await this.settingsService.getSettings();
            res.status(200).json({
                success: true,
                data: settings,
            });
        } catch (error) {
            res.status(500).json({
                success: false,
                message: 'Unable to retrieve settings',
                errors: [error.message],
            });
        }
    }

    public async updateSettings(req: Request, res: Response): Promise<void> {
        try {
            const updatedSettings = await this.settingsService.updateSettings(req.body);
            res.status(200).json({
                success: true,
                message: 'Settings updated successfully',
                data: updatedSettings,
            });
        } catch (error) {
            res.status(500).json({
                success: false,
                message: 'Unable to update settings',
                errors: [error.message],
            });
        }
    }
}

export const settingsController = new SettingsController();