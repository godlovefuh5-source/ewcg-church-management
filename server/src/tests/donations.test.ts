import request from 'supertest';
import { app } from '../app';
import { prisma } from '../prisma';

describe('Donations API', () => {
  beforeAll(async () => {
    await prisma.donation.deleteMany({});
  });

  afterAll(async () => {
    await prisma.$disconnect();
  });

  it('should create a donation', async () => {
    const response = await request(app)
      .post('/api/donations')
      .send({
        amount: 100,
        category: 'Tithe',
        donorName: 'John Doe',
        donorEmail: 'john.doe@example.com',
      });

    expect(response.status).toBe(201);
    expect(response.body.success).toBe(true);
    expect(response.body.data).toHaveProperty('transactionId');
  });

  it('should retrieve all donations', async () => {
    const response = await request(app).get('/api/donations');

    expect(response.status).toBe(200);
    expect(response.body.success).toBe(true);
    expect(Array.isArray(response.body.data)).toBe(true);
  });

  it('should retrieve a specific donation by ID', async () => {
    const donation = await prisma.donation.create({
      data: {
        amount: 50,
        category: 'Offering',
        donorName: 'Jane Doe',
        donorEmail: 'jane.doe@example.com',
      },
    });

    const response = await request(app).get(`/api/donations/${donation.id}`);

    expect(response.status).toBe(200);
    expect(response.body.success).toBe(true);
    expect(response.body.data).toHaveProperty('id', donation.id);
  });

  it('should return 404 for a non-existent donation', async () => {
    const response = await request(app).get('/api/donations/non-existent-id');

    expect(response.status).toBe(404);
    expect(response.body.success).toBe(false);
  });

  it('should handle invalid donation data', async () => {
    const response = await request(app)
      .post('/api/donations')
      .send({
        amount: -50,
        category: '',
      });

    expect(response.status).toBe(400);
    expect(response.body.success).toBe(false);
    expect(response.body.errors).toContain('Invalid donation data');
  });
});