import { Request, Response } from 'express';
import { SermonService } from '../services/sermon.service';
import { Sermon } from '../types/api';

class SermonsController {
    private sermonService: SermonService;

    constructor() {
        this.sermonService = new SermonService();
    }

    public async getAllSermons(req: Request, res: Response): Promise<Response> {
        try {
            const sermons: Sermon[] = await this.sermonService.getAllSermons();
            return res.status(200).json({ success: true, data: sermons });
        } catch (error) {
            return res.status(500).json({ success: false, message: 'Unable to retrieve sermons', errors: [error.message] });
        }
    }

    public async getSermonById(req: Request, res: Response): Promise<Response> {
        const { id } = req.params;
        try {
            const sermon: Sermon | null = await this.sermonService.getSermonById(id);
            if (!sermon) {
                return res.status(404).json({ success: false, message: 'Sermon not found' });
            }
            return res.status(200).json({ success: true, data: sermon });
        } catch (error) {
            return res.status(500).json({ success: false, message: 'Unable to retrieve sermon', errors: [error.message] });
        }
    }

    public async createSermon(req: Request, res: Response): Promise<Response> {
        const sermonData = req.body;
        try {
            const newSermon: Sermon = await this.sermonService.createSermon(sermonData);
            return res.status(201).json({ success: true, data: newSermon });
        } catch (error) {
            return res.status(400).json({ success: false, message: 'Unable to create sermon', errors: [error.message] });
        }
    }

    public async updateSermon(req: Request, res: Response): Promise<Response> {
        const { id } = req.params;
        const sermonData = req.body;
        try {
            const updatedSermon: Sermon | null = await this.sermonService.updateSermon(id, sermonData);
            if (!updatedSermon) {
                return res.status(404).json({ success: false, message: 'Sermon not found' });
            }
            return res.status(200).json({ success: true, data: updatedSermon });
        } catch (error) {
            return res.status(400).json({ success: false, message: 'Unable to update sermon', errors: [error.message] });
        }
    }

    public async deleteSermon(req: Request, res: Response): Promise<Response> {
        const { id } = req.params;
        try {
            const deleted = await this.sermonService.deleteSermon(id);
            if (!deleted) {
                return res.status(404).json({ success: false, message: 'Sermon not found' });
            }
            return res.status(204).json({ success: true, message: 'Sermon deleted successfully' });
        } catch (error) {
            return res.status(500).json({ success: false, message: 'Unable to delete sermon', errors: [error.message] });
        }
    }
}

export const sermonsController = new SermonsController();