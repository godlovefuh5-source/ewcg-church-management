import { Request, Response } from 'express';
import { DonationService } from '../services/donation.service';
import { Donation } from '../types/api';

export class DonationsController {
    private donationService: DonationService;

    constructor() {
        this.donationService = new DonationService();
    }

    public async createDonation(req: Request, res: Response): Promise<Response> {
        try {
            const donationData: Donation = req.body;
            const donation = await this.donationService.createDonation(donationData);
            return res.status(201).json({
                success: true,
                message: 'Donation created successfully',
                data: donation,
            });
        } catch (error) {
            return res.status(500).json({
                success: false,
                message: 'Unable to create donation',
                errors: [error.message],
            });
        }
    }

    public async getDonations(req: Request, res: Response): Promise<Response> {
        try {
            const donations = await this.donationService.getAllDonations();
            return res.status(200).json({
                success: true,
                data: donations,
            });
        } catch (error) {
            return res.status(500).json({
                success: false,
                message: 'Unable to retrieve donations',
                errors: [error.message],
            });
        }
    }

    public async getDonationById(req: Request, res: Response): Promise<Response> {
        try {
            const { id } = req.params;
            const donation = await this.donationService.getDonationById(id);
            if (!donation) {
                return res.status(404).json({
                    success: false,
                    message: 'Donation not found',
                });
            }
            return res.status(200).json({
                success: true,
                data: donation,
            });
        } catch (error) {
            return res.status(500).json({
                success: false,
                message: 'Unable to retrieve donation',
                errors: [error.message],
            });
        }
    }

    public async updateDonation(req: Request, res: Response): Promise<Response> {
        try {
            const { id } = req.params;
            const donationData: Donation = req.body;
            const updatedDonation = await this.donationService.updateDonation(id, donationData);
            if (!updatedDonation) {
                return res.status(404).json({
                    success: false,
                    message: 'Donation not found',
                });
            }
            return res.status(200).json({
                success: true,
                message: 'Donation updated successfully',
                data: updatedDonation,
            });
        } catch (error) {
            return res.status(500).json({
                success: false,
                message: 'Unable to update donation',
                errors: [error.message],
            });
        }
    }

    public async deleteDonation(req: Request, res: Response): Promise<Response> {
        try {
            const { id } = req.params;
            const deleted = await this.donationService.deleteDonation(id);
            if (!deleted) {
                return res.status(404).json({
                    success: false,
                    message: 'Donation not found',
                });
            }
            return res.status(204).json({
                success: true,
                message: 'Donation deleted successfully',
            });
        } catch (error) {
            return res.status(500).json({
                success: false,
                message: 'Unable to delete donation',
                errors: [error.message],
            });
        }
    }
}