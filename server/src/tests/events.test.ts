import request from 'supertest';
import { app } from '../app';
import { prisma } from '../prisma';

describe('Events API', () => {
  let eventId: string;

  beforeAll(async () => {
    // Seed a sample event for testing
    const event = await prisma.event.create({
      data: {
        title: 'Sample Event',
        description: 'This is a sample event for testing.',
        startDate: new Date(),
        endDate: new Date(new Date().setDate(new Date().getDate() + 1)),
        startTime: '10:00 AM',
        endTime: '12:00 PM',
        location: 'Church Hall',
        image: 'sample-image-url',
        organizer: 'Church',
        registrationStatus: 'OPEN',
      },
    });
    eventId = event.id;
  });

  afterAll(async () => {
    // Clean up the database
    await prisma.event.deleteMany({});
    await prisma.$disconnect();
  });

  it('should fetch all events', async () => {
    const response = await request(app).get('/api/events');
    expect(response.status).toBe(200);
    expect(Array.isArray(response.body.data)).toBe(true);
  });

  it('should fetch a single event by ID', async () => {
    const response = await request(app).get(`/api/events/${eventId}`);
    expect(response.status).toBe(200);
    expect(response.body.data.title).toBe('Sample Event');
  });

  it('should create a new event', async () => {
    const newEvent = {
      title: 'New Event',
      description: 'This is a new event.',
      startDate: new Date(),
      endDate: new Date(new Date().setDate(new Date().getDate() + 2)),
      startTime: '1:00 PM',
      endTime: '3:00 PM',
      location: 'Main Auditorium',
      image: 'new-event-image-url',
      organizer: 'Youth Group',
      registrationStatus: 'OPEN',
    };

    const response = await request(app).post('/api/events').send(newEvent);
    expect(response.status).toBe(201);
    expect(response.body.data.title).toBe(newEvent.title);
  });

  it('should update an existing event', async () => {
    const updatedEvent = {
      title: 'Updated Event',
      description: 'This is an updated event.',
    };

    const response = await request(app).put(`/api/events/${eventId}`).send(updatedEvent);
    expect(response.status).toBe(200);
    expect(response.body.data.title).toBe(updatedEvent.title);
  });

  it('should delete an event', async () => {
    const response = await request(app).delete(`/api/events/${eventId}`);
    expect(response.status).toBe(204);
  });
});