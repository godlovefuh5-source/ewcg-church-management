import request from 'supertest';
import { app } from '../app';
import { createUser, loginUser } from '../services/auth.service';

describe('Auth API', () => {
  let token: string;

  beforeAll(async () => {
    // Create a test user
    await createUser({
      username: 'testuser',
      password: 'testpassword',
      email: 'testuser@example.com',
    });

    // Log in to get a token
    const response = await loginUser({
      username: 'testuser',
      password: 'testpassword',
    });
    token = response.token;
  });

  afterAll(async () => {
    // Clean up test user
    await request(app).delete('/api/auth/users/testuser');
  });

  it('should register a new user', async () => {
    const response = await request(app)
      .post('/api/auth/register')
      .send({
        username: 'newuser',
        password: 'newpassword',
        email: 'newuser@example.com',
      });

    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty('message', 'User registered successfully');
  });

  it('should log in an existing user', async () => {
    const response = await request(app)
      .post('/api/auth/login')
      .send({
        username: 'testuser',
        password: 'testpassword',
      });

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('token');
  });

  it('should access a protected route', async () => {
    const response = await request(app)
      .get('/api/auth/protected')
      .set('Authorization', `Bearer ${token}`);

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('message', 'Protected content');
  });

  it('should fail to access a protected route without token', async () => {
    const response = await request(app).get('/api/auth/protected');

    expect(response.status).toBe(401);
    expect(response.body).toHaveProperty('message', 'Unauthorized');
  });
});