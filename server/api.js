'use strict'
const api = require('express').Router()
const db = require('../db');
const User = require('../db/models').User;

// If you aren't getting to this object, but rather the index.html (something with a joke) your path is wrong.
	// I know this because we automatically send index.html for all requests that don't make sense in our backend.
	// Ideally you would have something to handle this, so if you have time try that out!
api.get('/hello', (req, res) => res.send({hello: 'world'}));

api.get('/users', (req, res, next) => {
  	User.findAll({})
    .then(users => res.json(users))
    .catch(next);
});


// Set up Postman -> Headers -> Content-Type -> application/json
// Body -> {"name":"Thor"}
api.post('/users', (req, res, next) => {
  	User.create(req.body)
    .then(user => res.status(201).json(user))
    .catch(next);
});

api.put('/users/:userId', (req, res, next) => {
  	User.update(req.body, { 
		  where: { id: req.params.userId },
		  returning:true
		})
    .then(user => res.status(200).json(user))
    .catch(next);
});

// router.delete('/:playlistId', function (req, res, next) {
//   req.playlist.destroy()
//   .then(() => res.status(204).end())
//   .catch(next);
// });

api.delete('/users/:userId', (req, res, next) => {
	User.destroy({
		where: {
			id: req.params.userId
		}
	})
	.then(() => res.status(204).end())
	.catch(next)
})

api.get('/users/:userId', (req, res, next) => {
  	User.findById(req.params.userId)
    .then(function(user) {
      res.json(user);
    })
    .catch(next);
});

module.exports = api