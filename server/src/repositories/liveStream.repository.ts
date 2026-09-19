import { prisma } from '../prisma/schema.prisma';
import { LiveStream } from '../types/api';

export class LiveStreamRepository {
    async getLiveStream(): Promise<LiveStream | null> {
        return await prisma.liveStream.findUnique({
            where: { id: 1 }, // Assuming there's only one live stream configuration
        });
    }

    async updateLiveStream(data: Partial<LiveStream>): Promise<LiveStream> {
        return await prisma.liveStream.update({
            where: { id: 1 }, // Assuming there's only one live stream configuration
            data,
        });
    }
}