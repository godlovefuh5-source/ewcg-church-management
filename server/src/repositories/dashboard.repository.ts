import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export class DashboardRepository {
    async getDashboardStatistics() {
        const totalSermons = await prisma.sermon.count();
        const totalEvents = await prisma.event.count();
        const totalMinistries = await prisma.ministry.count();
        const totalDonations = await prisma.donation.count();
        const totalPrayerRequests = await prisma.prayerRequest.count();
        const totalContactMessages = await prisma.contactMessage.count();

        return {
            totalSermons,
            totalEvents,
            totalMinistries,
            totalDonations,
            totalPrayerRequests,
            totalContactMessages,
        };
    }

    async getRecentSermons(limit: number) {
        return await prisma.sermon.findMany({
            orderBy: {
                createdAt: 'desc',
            },
            take: limit,
        });
    }

    async getUpcomingEvents(limit: number) {
        return await prisma.event.findMany({
            where: {
                startDate: {
                    gte: new Date(),
                },
            },
            orderBy: {
                startDate: 'asc',
            },
            take: limit,
        });
    }

    async getRecentDonations(limit: number) {
        return await prisma.donation.findMany({
            orderBy: {
                createdAt: 'desc',
            },
            take: limit,
        });
    }

    async getRecentMessages(limit: number) {
        return await prisma.contactMessage.findMany({
            orderBy: {
                createdAt: 'desc',
            },
            take: limit,
        });
    }
}