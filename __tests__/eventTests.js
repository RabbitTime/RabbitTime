const fs = require('fs');
const path = require('path');
const Event = require('../server/models/eventModel')
const mongoose = require('mongoose');
const request = require('supertest');
const express = require('express');
// const axios = require('axios')
// let url = 'http://localhost:3000';
const router = require('../server/routes/api');
const { createEvent, getEvent, updateEvent } = require('../server/controllers/eventController');
// const { createEvent, getEvent, updateEvent } = require('../server/controllers/eventController')

// beforeAll(() => {
//   server = router.listen(3000); // Random number is needed to avoid using same port in different tests if you run in parallel
// });

// afterAll(() => {
//   server.close();
// });


// let eventController = {};
// const testJsonFile = path.resolve(__dirname, './events.dev.json');


// router.post('/event', eventController.createEvent, (req, res) => {
//   return res.status(200).json(res.locals.newEvent);
// });

// router.get('/event/:id', cookieController.checkCookie, eventController.getEvent, (req, res) => {
//   return res.status(200).json(res.locals.event);
// });

// router.put('/event/:id', cookieController.setCookie, eventController.updateEvent, (req, res) => {
//   return res.status(200).json(res.locals.updatedEvent);
// });

// test('returns false/status 400 when input name is not a string', (done) => {
//   request(router)
//     .post('/event')
//     .expect('Content-Type', /json/)
//     .send({
//       name: 8,
//       dates: '24/12/2019 09:15:00',
//       times: {start: '09:00:00', end: '10:00:00'},
//     })
//     .expect(400);
// });


// .post('/event')
// .expect('Content-Type', /json/)
// .send({
//   name: 8,
//   dates: '24/12/2019 09:15:00',
//   times: {start: '09:00:00', end: '10:00:00'},
// })
// .expect(400);


// describe('createEvent', () => {

//   test('returns false/status 400 when input name is not a string', async () => {
//     const res = await axios.post(`${url}/api/event`, {
//       name: 8,
//       dates: '24/12/2019 09:15:00',
//       times: {start: '09:00:00', end: '10:00:00'},
//     })
//     expect(res.status).toBe(400)

describe('eventController unit tests', () => {

  describe('createEvent', () => {

    jest.mock('../server/models/eventModel');
    // Event.create.mockCreate(() => ({
    //   name: 8,
    //   dates: '24/12/2019 09:15:00',
    //   times: {start: '09:00:00', end: '10:00:00'}
    // }));

    let req = {
      body: {
        name: 'hunter',
        dates: '24/12/2019 09:15:00',
        times: {start: '09:00:00', end: '10:00:00'},
      }
    };
    const res = jest.fn((x) => x);
    // const next = jest.fn((x) => x);

    it('returns false/status 400 when input name is not a string', async () => {
      let req = {
        body: {
          name: 12,
          dates: '24/12/2019 09:15:00',
          times: {start: '09:00:00', end: '10:00:00'},
        }
      };
      await createEvent(req, res);
      // expect(res.status).toHaveBeenCalledWith(400);
      // expect(res.status(400).send).toHaveBeenCalled();
      expect(res).toBeInstanceOf(Object);
    });

    xit('returns false/status 400 when input date is not a string', async () => {
      let req = {
        body: {
          name: 'hunter',
          dates: 7,
          times: {start: '09:00:00', end: '10:00:00'},
        }
      };
      await createEvent(req, res, next);
      expect(res.next.status).toHaveBeenCalledWith(400);
    });

    xit('returns false/status 400 when input times are not an object', async () => {
      let req = {
        body: {
          name: 'hunter',
          dates: '24/12/2019 09:15:00',
          times: 'Right Now!',
        }
      };
      await createEvent(req, res, next);
      expect(res.next.status).toHaveBeenCalledWith(400);
    });

    xit ('writes a new event to the database', async () => {
      // Event.createEvent.mockResolvedValue();
      await createEvent(req, res, next);
      expect(res).toBeInstanceOf(Object);
    });
  });

  xdescribe('getEvent', () => {

    it('returns status 400 if eventID is not in valid string format', () => {

    });

    it('returns status 400 if event is not in database', () => {

    });

    it('assigns res.locals.event to event if found in database', () => {

    });

  });

  xdescribe('updateEvent', () => {

    it('returns false/status 400 if input user is not a string', () => {

    });

    it('returns false/status 400 if input availability is not an array', () => {

    });

    it('returns status 400 if parameter id is not in valid mongoose form', () => {

    });

    it('returns status 400 if event id does not exist in the database', () => {

    });

    it('updates matching user if found in database', () => {

    });

    it('adds user to database if they do not already exist in database', () => {

    });

    it('saves event to database', () => {

    });

    it('returns updated event in res.locals.updatedEvent', () => {

    });

  });
});
