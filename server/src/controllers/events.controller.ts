import { Request, Response } from 'express';
import { EventService } from '../services/event.service';
import { Event } from '../types/api';

export class EventController {
    private eventService: EventService;

    constructor() {
        this.eventService = new EventService();
    }

    public async getAllEvents(req: Request, res: Response): Promise<void> {
        try {
            const events: Event[] = await this.eventService.getAllEvents();
            res.status(200).json({ success: true, data: events });
        } catch (error) {
            res.status(500).json({ success: false, message: 'Unable to retrieve events', errors: [error.message] });
        }
    }

    public async getEventById(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        try {
            const event: Event | null = await this.eventService.getEventById(id);
            if (!event) {
                res.status(404).json({ success: false, message: 'Event not found' });
                return;
            }
            res.status(200).json({ success: true, data: event });
        } catch (error) {
            res.status(500).json({ success: false, message: 'Unable to retrieve event', errors: [error.message] });
        }
    }

    public async createEvent(req: Request, res: Response): Promise<void> {
        const newEvent = req.body;
        try {
            const createdEvent: Event = await this.eventService.createEvent(newEvent);
            res.status(201).json({ success: true, data: createdEvent });
        } catch (error) {
            res.status(500).json({ success: false, message: 'Unable to create event', errors: [error.message] });
        }
    }

    public async updateEvent(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        const updatedEvent = req.body;
        try {
            const event: Event | null = await this.eventService.updateEvent(id, updatedEvent);
            if (!event) {
                res.status(404).json({ success: false, message: 'Event not found' });
                return;
            }
            res.status(200).json({ success: true, data: event });
        } catch (error) {
            res.status(500).json({ success: false, message: 'Unable to update event', errors: [error.message] });
        }
    }

    public async deleteEvent(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        try {
            const deleted = await this.eventService.deleteEvent(id);
            if (!deleted) {
                res.status(404).json({ success: false, message: 'Event not found' });
                return;
            }
            res.status(204).json({ success: true, message: 'Event deleted successfully' });
        } catch (error) {
            res.status(500).json({ success: false, message: 'Unable to delete event', errors: [error.message] });
        }
    }
}