import { PrismaClient } from '@prisma/client';
import { Sermon } from '../types/api';
import { CreateSermonInput, UpdateSermonInput } from '../validators/sermon.validator';

const prisma = new PrismaClient();

export const getSermons = async (): Promise<Sermon[]> => {
    return await prisma.sermon.findMany({
        include: {
            speaker: true,
            category: true,
        },
    });
};

export const getSermonById = async (id: string): Promise<Sermon | null> => {
    return await prisma.sermon.findUnique({
        where: { id },
        include: {
            speaker: true,
            category: true,
        },
    });
};

export const createSermon = async (data: CreateSermonInput): Promise<Sermon> => {
    return await prisma.sermon.create({
        data,
    });
};

export const updateSermon = async (id: string, data: UpdateSermonInput): Promise<Sermon> => {
    return await prisma.sermon.update({
        where: { id },
        data,
    });
};

export const deleteSermon = async (id: string): Promise<Sermon> => {
    return await prisma.sermon.delete({
        where: { id },
    });
};