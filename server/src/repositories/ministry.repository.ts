import { PrismaClient } from '@prisma/client';
import { Ministry } from '../types/prisma';

const prisma = new PrismaClient();

export class MinistryRepository {
    async getAllMinistries(): Promise<Ministry[]> {
        return await prisma.ministry.findMany();
    }

    async getMinistryById(id: string): Promise<Ministry | null> {
        return await prisma.ministry.findUnique({
            where: { id },
        });
    }

    async createMinistry(data: Omit<Ministry, 'id'>): Promise<Ministry> {
        return await prisma.ministry.create({
            data,
        });
    }

    async updateMinistry(id: string, data: Partial<Omit<Ministry, 'id'>>): Promise<Ministry> {
        return await prisma.ministry.update({
            where: { id },
            data,
        });
    }

    async deleteMinistry(id: string): Promise<Ministry> {
        return await prisma.ministry.delete({
            where: { id },
        });
    }
}