'use strict'
const api = require('express').Router()
const db = require('../db');
const User = require('../db/models').User;
const studentsRouter = require('./routes/users');
const campusRouter = require('./routes/campuses');

// If you aren't getting to this object, but rather the index.html (something with a joke) your path is wrong.
	// I know this because we automatically send index.html for all requests that don't make sense in our backend.
	// Ideally you would have something to handle this, so if you have time try that out!
api.use('/student', studentsRouter);
api.use('/campus',campusRouter);

module.exports = api