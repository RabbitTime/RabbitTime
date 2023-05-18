// const request = require('supertest');
// const mongoose = require('mongoose');
const path = require('path');
// const db = require('../server/models.eventMode.js');
const fs = require('fs');
const Event = require('../server/models/eventModel.js');

const testJsonFile = path.resolve(__dirname, './db/events.test.json');

const validEventData =  {
  name: 'rabbit time',
  dates: '1/1/2001',
  times: {
    start: 'now', 
    end: 'then'
  },
  users: [{
    name: 'Stabby',
    availability: [{
      date: 'now',
      timeslots: ['right now']
    }]
  }]
};

beforeEach(() => {
  fs.writeFileSync(testJsonFile, JSON.stringify([]));
});

describe('model tests', () => {
  it('requires string type for name property: type coerces number input.', () => {
    const event = new Event(validEventData);
    event.name = 5;
    fs.writeFileSync(testJsonFile, JSON.stringify(event));
    const savedEvent = JSON.parse(fs.readFileSync(testJsonFile));
    expect(savedEvent.name).toBe('5');
  });
  //   it('* testing that beforeEach sets db to empty array', () => {
  //     const db = JSON.parse(fs.readFileSync(testJsonFile));
  //     expect(db.length).toBeFalsy();
  //   });
  it('requires value for name: does not accept undefined', () => {
    const invalidEventData = {};
    const event = new Event(invalidEventData);
    fs.writeFileSync(testJsonFile, JSON.stringify(event));
    const savedEvent = JSON.parse(fs.readFileSync(testJsonFile));
    expect(savedEvent.name).not.toBeUndefined();

  });
  xit('requires value for dates', () => {
    const invalidEventData = {};
    const event = new Event(invalidEventData);
    expect(event.dates).not.toBeUndefined();
  });
  // You shouldn't be able to add in any field that isn't defined in the schema

});