const debug = require('debug')('@agilemd/pp:api');
const express = require('express');

// [ZL] Implement authenticate and authorize middleware below and use them in the correct places
const authenticate = require('./middleware/authenticate');
const authorize = require('./middleware/authorize');
const getPatient = require('./controllers/patients/get');

const api = express();

api.get('/patients/:patientId', getPatient);

// [ZL] This is the stub of the error handler
api.use((err, req, res, next) => {
  debug('error', err);

  next();
});

module.exports = api;
