import { PrismaClient } from '@prisma/client';
import { Leader } from '../types/prisma';

const prisma = new PrismaClient();

export class LeaderRepository {
    async createLeader(data: Leader): Promise<Leader> {
        return await prisma.leader.create({
            data,
        });
    }

    async getLeaderById(id: string): Promise<Leader | null> {
        return await prisma.leader.findUnique({
            where: { id },
        });
    }

    async getAllLeaders(): Promise<Leader[]> {
        return await prisma.leader.findMany();
    }

    async updateLeader(id: string, data: Partial<Leader>): Promise<Leader> {
        return await prisma.leader.update({
            where: { id },
            data,
        });
    }

    async deleteLeader(id: string): Promise<Leader> {
        return await prisma.leader.delete({
            where: { id },
        });
    }
}