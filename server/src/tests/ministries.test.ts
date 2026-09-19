import request from 'supertest';
import { app } from '../app'; // Adjust the import based on your app structure
import { prisma } from '../prisma'; // Adjust the import based on your prisma setup

describe('Ministries API', () => {
  beforeAll(async () => {
    await prisma.ministry.deleteMany(); // Clear existing ministries
    await prisma.ministry.createMany({
      data: [
        { name: 'Children Ministry', description: 'Ministry for children' },
        { name: 'Youth Ministry', description: 'Ministry for youth' },
      ],
    });
  });

  afterAll(async () => {
    await prisma.$disconnect();
  });

  it('should fetch all ministries', async () => {
    const response = await request(app).get('/api/ministries');
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('data');
    expect(response.body.data.length).toBeGreaterThan(0);
  });

  it('should create a new ministry', async () => {
    const newMinistry = {
      name: 'Women Ministry',
      description: 'Ministry for women',
    };

    const response = await request(app).post('/api/ministries').send(newMinistry);
    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty('data');
    expect(response.body.data.name).toBe(newMinistry.name);
  });

  it('should update an existing ministry', async () => {
    const ministry = await prisma.ministry.findFirst();
    const updatedMinistry = { name: 'Updated Ministry', description: 'Updated description' };

    const response = await request(app).put(`/api/ministries/${ministry.id}`).send(updatedMinistry);
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('data');
    expect(response.body.data.name).toBe(updatedMinistry.name);
  });

  it('should delete a ministry', async () => {
    const ministry = await prisma.ministry.findFirst();
    const response = await request(app).delete(`/api/ministries/${ministry.id}`);
    expect(response.status).toBe(204);
  });
});