const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const eventSchema = new Schema({
  name: { type: String, required: true },
  dates: { type: [String], required: true },
  times: {
    start: {type: String, required: true},
    end: {type: String, required: true}
  },
  users: [{
    name: String,
    availability: [{
      date: String,
      timeslots: [String]
    }]
  }]
});

module.exports = mongoose.model('Event', eventSchema);