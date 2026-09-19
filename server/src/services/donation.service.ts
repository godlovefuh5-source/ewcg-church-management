import { Donation } from '../repositories/donation.repository';
import { DonationData } from '../types/api';
import { BadRequestError, NotFoundError } from '../utils/errorHandler';

class DonationService {
    async createDonation(donationData: DonationData): Promise<Donation> {
        if (!donationData.amount || donationData.amount <= 0) {
            throw new BadRequestError('Donation amount must be greater than zero.');
        }

        const donation = await Donation.create({
            data: donationData,
        });

        return donation;
    }

    async getDonationById(id: string): Promise<Donation> {
        const donation = await Donation.findUnique({
            where: { id },
        });

        if (!donation) {
            throw new NotFoundError('Donation not found.');
        }

        return donation;
    }

    async getAllDonations(): Promise<Donation[]> {
        return await Donation.findMany();
    }

    async updateDonation(id: string, donationData: Partial<DonationData>): Promise<Donation> {
        const donation = await this.getDonationById(id);

        const updatedDonation = await Donation.update({
            where: { id },
            data: { ...donation, ...donationData },
        });

        return updatedDonation;
    }

    async deleteDonation(id: string): Promise<void> {
        await this.getDonationById(id);
        await Donation.delete({
            where: { id },
        });
    }
}

export const donationService = new DonationService();