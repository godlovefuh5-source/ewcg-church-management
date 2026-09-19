import { PrismaClient } from '@prisma/client';
import { Settings } from '../types/prisma';

const prisma = new PrismaClient();

export class SettingsRepository {
    async getSettings(): Promise<Settings | null> {
        return await prisma.settings.findUnique({
            where: { id: 1 }, // Assuming there's only one settings record
        });
    }

    async updateSettings(data: Partial<Settings>): Promise<Settings> {
        return await prisma.settings.update({
            where: { id: 1 }, // Assuming there's only one settings record
            data,
        });
    }
}