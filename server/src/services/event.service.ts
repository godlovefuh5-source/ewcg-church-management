import { Event } from '../types/api';
import { EventRepository } from '../repositories/event.repository';

class EventService {
    private eventRepository: EventRepository;

    constructor() {
        this.eventRepository = new EventRepository();
    }

    async getAllEvents(): Promise<Event[]> {
        return await this.eventRepository.findAll();
    }

    async getEventById(id: string): Promise<Event | null> {
        return await this.eventRepository.findById(id);
    }

    async createEvent(eventData: Omit<Event, 'id'>): Promise<Event> {
        return await this.eventRepository.create(eventData);
    }

    async updateEvent(id: string, eventData: Partial<Omit<Event, 'id'>>): Promise<Event | null> {
        return await this.eventRepository.update(id, eventData);
    }

    async deleteEvent(id: string): Promise<boolean> {
        return await this.eventRepository.delete(id);
    }
}

export const eventService = new EventService();