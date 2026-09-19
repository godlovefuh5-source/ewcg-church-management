import { ContactMessage } from '../types/api';
import { prisma } from '../prisma';
import { Response } from 'express';

export const createContactMessage = async (messageData: ContactMessage, res: Response) => {
    try {
        const newMessage = await prisma.contactMessage.create({
            data: messageData,
        });
        return res.status(201).json({
            success: true,
            message: 'Contact message created successfully',
            data: newMessage,
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Unable to create contact message',
            errors: [error.message],
        });
    }
};

export const getAllContactMessages = async (res: Response) => {
    try {
        const messages = await prisma.contactMessage.findMany();
        return res.status(200).json({
            success: true,
            data: messages,
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Unable to retrieve contact messages',
            errors: [error.message],
        });
    }
};