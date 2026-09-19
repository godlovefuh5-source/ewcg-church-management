import { prisma } from '../prisma/schema.prisma';
import { ContactMessage } from '../types/api';

export class ContactRepository {
    async createContactMessage(data: ContactMessage): Promise<ContactMessage> {
        return await prisma.contactMessage.create({
            data,
        });
    }

    async getContactMessages(): Promise<ContactMessage[]> {
        return await prisma.contactMessage.findMany();
    }

    async getContactMessageById(id: string): Promise<ContactMessage | null> {
        return await prisma.contactMessage.findUnique({
            where: { id },
        });
    }

    async deleteContactMessage(id: string): Promise<ContactMessage> {
        return await prisma.contactMessage.delete({
            where: { id },
        });
    }
}