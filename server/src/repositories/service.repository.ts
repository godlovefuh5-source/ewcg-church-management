import { PrismaClient } from '@prisma/client';
import { Service } from '../types/api';

const prisma = new PrismaClient();

export class ServiceRepository {
    async createService(data: Service): Promise<Service> {
        return await prisma.service.create({
            data,
        });
    }

    async getServiceById(id: string): Promise<Service | null> {
        return await prisma.service.findUnique({
            where: { id },
        });
    }

    async getAllServices(): Promise<Service[]> {
        return await prisma.service.findMany();
    }

    async updateService(id: string, data: Partial<Service>): Promise<Service> {
        return await prisma.service.update({
            where: { id },
            data,
        });
    }

    async deleteService(id: string): Promise<Service> {
        return await prisma.service.delete({
            where: { id },
        });
    }
}