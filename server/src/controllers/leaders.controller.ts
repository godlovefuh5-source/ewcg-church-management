import { Request, Response } from 'express';
import { LeaderService } from '../services/leader.service';
import { Leader } from '../types/api';

export class LeaderController {
    private leaderService: LeaderService;

    constructor() {
        this.leaderService = new LeaderService();
    }

    public async getAllLeaders(req: Request, res: Response): Promise<void> {
        try {
            const leaders: Leader[] = await this.leaderService.getAllLeaders();
            res.status(200).json({ success: true, data: leaders });
        } catch (error) {
            res.status(500).json({ success: false, message: 'Unable to fetch leaders', errors: [error.message] });
        }
    }

    public async getLeaderById(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        try {
            const leader: Leader | null = await this.leaderService.getLeaderById(id);
            if (!leader) {
                res.status(404).json({ success: false, message: 'Leader not found' });
                return;
            }
            res.status(200).json({ success: true, data: leader });
        } catch (error) {
            res.status(500).json({ success: false, message: 'Unable to fetch leader', errors: [error.message] });
        }
    }

    public async createLeader(req: Request, res: Response): Promise<void> {
        const leaderData: Leader = req.body;
        try {
            const newLeader: Leader = await this.leaderService.createLeader(leaderData);
            res.status(201).json({ success: true, data: newLeader });
        } catch (error) {
            res.status(500).json({ success: false, message: 'Unable to create leader', errors: [error.message] });
        }
    }

    public async updateLeader(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        const leaderData: Leader = req.body;
        try {
            const updatedLeader: Leader | null = await this.leaderService.updateLeader(id, leaderData);
            if (!updatedLeader) {
                res.status(404).json({ success: false, message: 'Leader not found' });
                return;
            }
            res.status(200).json({ success: true, data: updatedLeader });
        } catch (error) {
            res.status(500).json({ success: false, message: 'Unable to update leader', errors: [error.message] });
        }
    }

    public async deleteLeader(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        try {
            const deleted: boolean = await this.leaderService.deleteLeader(id);
            if (!deleted) {
                res.status(404).json({ success: false, message: 'Leader not found' });
                return;
            }
            res.status(204).json({ success: true, message: 'Leader deleted successfully' });
        } catch (error) {
            res.status(500).json({ success: false, message: 'Unable to delete leader', errors: [error.message] });
        }
    }
}