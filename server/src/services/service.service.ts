import { Service } from '../repositories/service.repository';
import { Service as ServiceModel } from '../types/api';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export class ServiceService {
    async createService(data: ServiceModel): Promise<Service> {
        return await prisma.service.create({
            data,
        });
    }

    async getAllServices(): Promise<Service[]> {
        return await prisma.service.findMany();
    }

    async getServiceById(id: string): Promise<Service | null> {
        return await prisma.service.findUnique({
            where: { id },
        });
    }

    async updateService(id: string, data: Partial<ServiceModel>): Promise<Service> {
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