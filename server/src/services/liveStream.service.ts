import { LiveStream } from '../repositories/liveStream.repository';
import { LiveStreamData } from '../types/api';

export class LiveStreamService {
    private liveStreamRepo: LiveStream;

    constructor() {
        this.liveStreamRepo = new LiveStream();
    }

    async getLiveStreamSettings(): Promise<LiveStreamData> {
        return await this.liveStreamRepo.getSettings();
    }

    async updateLiveStreamSettings(settings: LiveStreamData): Promise<LiveStreamData> {
        return await this.liveStreamRepo.updateSettings(settings);
    }

    async getCurrentStreamStatus(): Promise<string> {
        return await this.liveStreamRepo.getCurrentStatus();
    }

    async setStreamStatus(status: string): Promise<void> {
        await this.liveStreamRepo.setStatus(status);
    }
}