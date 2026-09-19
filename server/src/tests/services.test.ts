import request from 'supertest';
import { app } from '../app'; // Adjust the import based on your app structure
import { createTestUser, createTestSermon } from './testUtils'; // Utility functions for creating test data

describe('Services API', () => {
  let token: string;

  beforeAll(async () => {
    // Create a test user and get a JWT token
    const user = await createTestUser();
    token = user.token;
  });

  afterAll(async () => {
    // Clean up test data if necessary
  });

  describe('GET /api/services', () => {
    it('should return a list of services', async () => {
      const response = await request(app)
        .get('/api/services')
        .set('Authorization', `Bearer ${token}`);

      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty('data');
      expect(Array.isArray(response.body.data)).toBe(true);
    });
  });

  describe('POST /api/services', () => {
    it('should create a new service', async () => {
      const newService = {
        name: 'Test Service',
        day: 'Sunday',
        time: '10:00 AM',
        location: 'Church',
        description: 'A test service',
      };

      const response = await request(app)
        .post('/api/services')
        .set('Authorization', `Bearer ${token}`)
        .send(newService);

      expect(response.status).toBe(201);
      expect(response.body).toHaveProperty('data');
      expect(response.body.data.name).toBe(newService.name);
    });
  });

  describe('PUT /api/services/:id', () => {
    it('should update an existing service', async () => {
      const service = await createTestSermon(); // Assuming this creates a service and returns it

      const updatedService = {
        name: 'Updated Service',
      };

      const response = await request(app)
        .put(`/api/services/${service.id}`)
        .set('Authorization', `Bearer ${token}`)
        .send(updatedService);

      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty('data');
      expect(response.body.data.name).toBe(updatedService.name);
    });
  });

  describe('DELETE /api/services/:id', () => {
    it('should delete a service', async () => {
      const service = await createTestSermon(); // Assuming this creates a service and returns it

      const response = await request(app)
        .delete(`/api/services/${service.id}`)
        .set('Authorization', `Bearer ${token}`);

      expect(response.status).toBe(204);
    });
  });
});