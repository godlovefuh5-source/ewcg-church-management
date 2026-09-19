import { PrismaClient } from '@prisma/client';
import { Leader } from '../types/prisma';

const prisma = new PrismaClient();

export class LeaderService {
    async createLeader(data: Leader) {
        return await prisma.leader.create({
            data,
        });
    }

    async getLeaders() {
        return await prisma.leader.findMany();
    }

    async getLeaderById(id: string) {
        return await prisma.leader.findUnique({
            where: { id },
        });
    }

    async updateLeader(id: string, data: Partial<Leader>) {
        return await prisma.leader.update({
            where: { id },
            data,
        });
    }

    async deleteLeader(id: string) {
        return await prisma.leader.delete({
            where: { id },
        });
    }
}