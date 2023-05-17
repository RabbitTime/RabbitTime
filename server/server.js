const express = require('express');
const mongoose = require('mongoose');
const app = express();
const cookieParser = require('cookie-parser');
require('dotenv').config();

const PORT = 3000;
const mongoURI = 'mongodb+srv://yetitime:yetitime@yetitime.jtwt5zb.mongodb.net/?retryWrites=true&w=majority';

// conect to mongo database
mongoose.connect(mongoURI);

// require routers
const apiRouter = require('./routes/api');

// parse request body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// route handlers
// Parse all incoming cookies and store on req.cookies object
app.use('/api', cookieParser(),  apiRouter);

// unknown route handler
app.use('*', (req, res) => {
  return res.status(404).send('404 Not Found');
});

// global error handler
app.use((err, req, res, next) => { /* eslint-disable-line */
  const defaultError = {
    log: `Express caught an unknown middleware error: ${err}`,
    status: 500,
    message: 'Internal Server Error',
  };
  const { log, status, message } = Object.assign({}, defaultError, err);
  console.log(log);
  return res.status(status).send(message);
});

// start server
app.listen((PORT), () => {
  console.log(`Server listening on port ${PORT}!`);
});

module.exports = app;
