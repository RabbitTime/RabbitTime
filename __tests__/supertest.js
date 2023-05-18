const server = 'http://localhost:3000';
const db = require('./events.dev.json');
// const app = require('server');
const supertest = require('supertest');
const request = supertest(server);


describe('eventController unit tests', () => {

  describe('createEvent Route', () => {
    it ('rsesponds with status 400 when input username is not a string', async () => {
      const response = await request.post('/api/event').send({
        name: 8,
        dates: ['24/12/2019 09:15:00'],
        times: {start: '09:00:00', end: '10:00:00'},
      });
      expect(response.statusCode).toBe(400);
    });
  
    it('returns false/status 400 when input date is not a string', async () => {
      const response = await request.post('/api/event').send({
        name: 'hunter',
        dates: 12,
        times: {start: '09:00:00', end: '10:00:00'},
      });
      expect(response.statusCode).toBe(400);
    });
  
    it('returns false/status 400 when input times are not an object', async () => {
      const response = await request.post('/api/event').send({
        name: 'hunter',
        dates: ['24/12/2019 09:15:00'],
        times: '12',
      });
      expect(response.statusCode).toBe(400);
    });
  
    it ('successfully returns 200 status on correct routing', async () => {
      const response = await request.post('/api/event').send({
        name: 'hunter',
        dates: ['24/12/2019 09:15:00'],
        times: {start: '09:00:00', end: '10:00:00'},
      });
      expect(response.statusCode).toBe(200);
    });
  });
    //64663d58e869c4c1734e4ad9
  describe('getEvent Route', () => {
    it ('responds with 400 status if query id is not valid', async () => {
      const response = await request.get('api/event/)
      .query({ id: 'tester' })
      .expect(response.statusCode).toBe(400);
    });
  });

});