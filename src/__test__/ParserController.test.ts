import request from 'supertest';
import { app } from '../server';

describe('Test ParserController', () => {
  it('Request /api/current-exchange should return parsed data', async () => {
    const result = await request(app).get('/api/current-exchange').send();

    if (result && result.body && result.body.data) {
      const expected = Object.keys(result.body.data);
      const keys = ['metadata', 'currentExchange'];

      expect(result.status).toBe(200);
      expect(expected).toEqual(expect.arrayContaining(keys));
    }
  });
});
