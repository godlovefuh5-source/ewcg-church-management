import { PrismaClient } from '@prisma/client';
import { PrayerRequest } from '../types/prisma';

const prisma = new PrismaClient();

export const createPrayerRequest = async (data: PrayerRequest) => {
    return await prisma.prayerRequest.create({
        data,
    });
};

export const getPrayerRequests = async () => {
    return await prisma.prayerRequest.findMany();
};

export const getPrayerRequestById = async (id: string) => {
    return await prisma.prayerRequest.findUnique({
        where: { id },
    });
};

export const updatePrayerRequest = async (id: string, data: Partial<PrayerRequest>) => {
    return await prisma.prayerRequest.update({
        where: { id },
        data,
    });
};

export const deletePrayerRequest = async (id: string) => {
    return await prisma.prayerRequest.delete({
        where: { id },
    });
};