import request from 'supertest';
import { app } from '../server';

describe('Test HealtcheckController', () => {
  it('Request /healthcheck should return Server is running', async () => {
    const result = await request(app).get('/healthcheck').send();

    expect(result.status).toBe(200);
    expect(result.body.data).toBe('Server is running');
  });
});
