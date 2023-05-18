const server = 'http://localhost:3000';
// const db = require('./events.dev.json');
// const app = require('server');\
const supertest = require('supertest');
const request = supertest(server);
// const mongoose = require('mongoose');
const Event = require('../server/models/eventModel');


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
  
    it('returns status 400 when input date is not a string', async () => {
      const response = await request.post('/api/event').send({
        name: 'hunter',
        dates: 12,
        times: {start: '09:00:00', end: '10:00:00'},
      });
      expect(response.statusCode).toBe(400);
    });
  
    it('returns status 400 when input times are not an object', async () => {
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

    it ('sucessfully returns a json object with the proper name', async () => {
      const response = await request.post('/api/event').send({
        name: 'hunter',
        dates: ['24/12/2019 09:15:00'],
        times: {start: '09:00:00', end: '10:00:00'},
      });
      expect(response.body.name).toEqual('hunter');
    });

    // it ('sucessfully add entry to database', async () => {
    //   const response =  await Event.findById('6466439d21686939e9f320ad');
    //   expect(response.body.name).toEqual('hunter');
    // });
    //could test to see if it showed up in the database but I'm not sure how to link the entire database in a request call chained to this
    //I think just visually seeing it in compass is alright for now

  });
  //64663d58e869c4c1734e4ad9
  describe('getEvent Route', () => {
    it ('responds with 400 status if query id is not valid', async () => {
      const response = await request.get('/api/event/{test: 12}').set('Accept', 'application/json');
      expect(response.statusCode).toBe(400);
    });

    it ('responds with a 200 status if the id of the item is found in the database', async () => {
      const response = await request.get('/api/event/6466439d21686939e9f320ad').set('Accept', 'application/json');
      expect(response.statusCode).toBe(200);
    });

    it ('returns the found event if the id matches in the database',  async () => {
      const response = await request.get('/api/event/6466439d21686939e9f320ad').set('Accept', 'application/json');
      expect(response.body.name).toEqual('hunter');
    });

  });

  describe('updateEvent Route', () => {
    it ('responds with a 400 status if the passed in name in body is not correct', async () => {
      const response = await request.put('/api/event/6466439d21686939e9f320ad').set('Accept', 'application/json').send({
        name: 8,
        availability: [
          {date: '2023.5.15',
            timeslots: ['9:00 AM'] }
        ]
      });
      expect(response.statusCode).toBe(400);
    });

    it ('responds with a 200 status if the matching item is updated', async () => {
      const response = await request.put('/api/event/6466439d21686939e9f320ad').set('Accept', 'application/json').send({
        name: 'hunter',
        availability: [
          {date: '2023.5.15',
            timeslots: ['9:00 AM'] }
        ]
      });
      expect(response.statusCode).toBe(200);
    });

    it ('responds with the updated item on a sucessful call', async () => {
      const response = await request.put('/api/event/6466439d21686939e9f320ad').set('Accept', 'application/json').send({
        name: 'hunter',
        availability: [
          {date: '2023.5.15',
            timeslots: ['9:00 AM'] }
        ]
      });
      expect(response.body.name).toEqual('hunter');
    });

  });

  describe('catchAllRoute', () => {
    it ('responds with a 404 status if the route is not found', async () => {
      const response = await request.get('/events');
      expect(response.statusCode).toBe(404);
    });

    it ('responds with 404 Not Found message if the route is not found', async () => {
      const response = await request.get('/events');
      expect(response.text).toEqual('404 Not Found');
    });

  });

});