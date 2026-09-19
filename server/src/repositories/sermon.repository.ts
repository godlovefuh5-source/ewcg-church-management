import { PrismaClient } from '@prisma/client';
import { Sermon } from '../types/prisma';

const prisma = new PrismaClient();

export class SermonRepository {
    async getAllSermons(): Promise<Sermon[]> {
        return await prisma.sermon.findMany();
    }

    async getSermonById(id: string): Promise<Sermon | null> {
        return await prisma.sermon.findUnique({
            where: { id },
        });
    }

    async createSermon(data: Omit<Sermon, 'id'>): Promise<Sermon> {
        return await prisma.sermon.create({
            data,
        });
    }

    async updateSermon(id: string, data: Partial<Omit<Sermon, 'id'>>): Promise<Sermon> {
        return await prisma.sermon.update({
            where: { id },
            data,
        });
    }

    async deleteSermon(id: string): Promise<Sermon> {
        return await prisma.sermon.delete({
            where: { id },
        });
    }
}