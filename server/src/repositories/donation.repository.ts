import { PrismaClient } from '@prisma/client';
import { Donation } from '../types/api';

const prisma = new PrismaClient();

export class DonationRepository {
    async createDonation(donationData: Donation): Promise<Donation> {
        return await prisma.donation.create({
            data: donationData,
        });
    }

    async getDonationById(id: string): Promise<Donation | null> {
        return await prisma.donation.findUnique({
            where: { id },
        });
    }

    async getAllDonations(): Promise<Donation[]> {
        return await prisma.donation.findMany();
    }

    async updateDonation(id: string, donationData: Partial<Donation>): Promise<Donation> {
        return await prisma.donation.update({
            where: { id },
            data: donationData,
        });
    }

    async deleteDonation(id: string): Promise<Donation> {
        return await prisma.donation.delete({
            where: { id },
        });
    }
}