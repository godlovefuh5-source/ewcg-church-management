import { PrismaClient } from '@prisma/client';
import { Ministry } from '../types/api';
import { MinistryRepository } from '../repositories/ministry.repository';

const prisma = new PrismaClient();
const ministryRepository = new MinistryRepository(prisma);

export class MinistryService {
    async getAllMinistries(): Promise<Ministry[]> {
        return await ministryRepository.findAll();
    }

    async getMinistryById(id: string): Promise<Ministry | null> {
        return await ministryRepository.findById(id);
    }

    async createMinistry(data: Omit<Ministry, 'id'>): Promise<Ministry> {
        return await ministryRepository.create(data);
    }

    async updateMinistry(id: string, data: Partial<Ministry>): Promise<Ministry | null> {
        return await ministryRepository.update(id, data);
    }

    async deleteMinistry(id: string): Promise<void> {
        await ministryRepository.delete(id);
    }
}