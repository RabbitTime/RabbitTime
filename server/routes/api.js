const express = require('express');
const eventController = require('../controllers/eventController');
const cookieController = require('../controllers/cookieController');


const router = express.Router();

router.post('/event', eventController.createEvent, (req, res) => {
  return res.status(200).json(res.locals.newEvent);
});

router.get('/event/:id', eventController.getEvent, (req, res) => {
  return res.status(200).json(res.locals.event);
});

router.put('/event/:id', eventController.updateEvent, (req, res) => {
  return res.status(200).json(res.locals.updatedEvent);
});

module.exports = router;
