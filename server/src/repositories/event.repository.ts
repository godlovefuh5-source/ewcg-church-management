import { PrismaClient } from '@prisma/client';
import { Event } from '../types/api';

const prisma = new PrismaClient();

export class EventRepository {
    async getAllEvents(): Promise<Event[]> {
        return await prisma.event.findMany();
    }

    async getEventById(id: string): Promise<Event | null> {
        return await prisma.event.findUnique({
            where: { id },
        });
    }

    async createEvent(data: Omit<Event, 'id'>): Promise<Event> {
        return await prisma.event.create({
            data,
        });
    }

    async updateEvent(id: string, data: Partial<Omit<Event, 'id'>>): Promise<Event> {
        return await prisma.event.update({
            where: { id },
            data,
        });
    }

    async deleteEvent(id: string): Promise<Event> {
        return await prisma.event.delete({
            where: { id },
        });
    }
}