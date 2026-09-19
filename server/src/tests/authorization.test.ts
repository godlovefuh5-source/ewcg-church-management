import request from 'supertest';
import { app } from '../app';
import { createUser, loginUser } from './utils'; // Utility functions for creating and logging in users

describe('Authorization Tests', () => {
  let token: string;

  beforeAll(async () => {
    // Create a user and log in to get a token
    const user = await createUser({ username: 'testuser', password: 'password123' });
    const response = await loginUser({ username: user.username, password: 'password123' });
    token = response.body.token;
  });

  it('should allow access to protected routes with valid token', async () => {
    const response = await request(app)
      .get('/api/protected-route') // Replace with an actual protected route
      .set('Authorization', `Bearer ${token}`);

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('message', 'Access granted');
  });

  it('should deny access to protected routes without token', async () => {
    const response = await request(app).get('/api/protected-route'); // Replace with an actual protected route

    expect(response.status).toBe(401);
    expect(response.body).toHaveProperty('message', 'No token provided');
  });

  it('should deny access to protected routes with invalid token', async () => {
    const response = await request(app)
      .get('/api/protected-route') // Replace with an actual protected route
      .set('Authorization', 'Bearer invalidtoken');

    expect(response.status).toBe(401);
    expect(response.body).toHaveProperty('message', 'Invalid token');
  });
});