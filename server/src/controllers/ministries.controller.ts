import { Request, Response } from 'express';
import { MinistryService } from '../services/ministry.service';
import { Ministry } from '../types/api';

export class MinistriesController {
    private ministryService: MinistryService;

    constructor() {
        this.ministryService = new MinistryService();
    }

    public async getAllMinistries(req: Request, res: Response): Promise<Response> {
        try {
            const ministries: Ministry[] = await this.ministryService.getAllMinistries();
            return res.status(200).json({ success: true, data: ministries });
        } catch (error) {
            return res.status(500).json({ success: false, message: 'Unable to retrieve ministries', errors: [error.message] });
        }
    }

    public async getMinistryById(req: Request, res: Response): Promise<Response> {
        const { id } = req.params;
        try {
            const ministry: Ministry | null = await this.ministryService.getMinistryById(id);
            if (!ministry) {
                return res.status(404).json({ success: false, message: 'Ministry not found' });
            }
            return res.status(200).json({ success: true, data: ministry });
        } catch (error) {
            return res.status(500).json({ success: false, message: 'Unable to retrieve ministry', errors: [error.message] });
        }
    }

    public async createMinistry(req: Request, res: Response): Promise<Response> {
        const newMinistry: Ministry = req.body;
        try {
            const createdMinistry: Ministry = await this.ministryService.createMinistry(newMinistry);
            return res.status(201).json({ success: true, data: createdMinistry });
        } catch (error) {
            return res.status(500).json({ success: false, message: 'Unable to create ministry', errors: [error.message] });
        }
    }

    public async updateMinistry(req: Request, res: Response): Promise<Response> {
        const { id } = req.params;
        const updatedMinistry: Ministry = req.body;
        try {
            const ministry: Ministry | null = await this.ministryService.updateMinistry(id, updatedMinistry);
            if (!ministry) {
                return res.status(404).json({ success: false, message: 'Ministry not found' });
            }
            return res.status(200).json({ success: true, data: ministry });
        } catch (error) {
            return res.status(500).json({ success: false, message: 'Unable to update ministry', errors: [error.message] });
        }
    }

    public async deleteMinistry(req: Request, res: Response): Promise<Response> {
        const { id } = req.params;
        try {
            const deleted: boolean = await this.ministryService.deleteMinistry(id);
            if (!deleted) {
                return res.status(404).json({ success: false, message: 'Ministry not found' });
            }
            return res.status(204).json({ success: true, message: 'Ministry deleted successfully' });
        } catch (error) {
            return res.status(500).json({ success: false, message: 'Unable to delete ministry', errors: [error.message] });
        }
    }
}