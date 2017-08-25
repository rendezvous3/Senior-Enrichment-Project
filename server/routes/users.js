const users = require('express').Router()
const db = require('../../db');
const User = require('../../db/models').User;

users.get('/', (req, res, next) => {
  	User.findAll({})
    .then(users => res.json(users))
    .catch(next);
});


// Set up Postman -> Headers -> Content-Type -> application/json
// Body -> {"name":"Thor"}
users.post('/', (req, res, next) => {
  	User.create(req.body)
    .then(user => res.status(201).json(user))
    .catch(next);
});

users.put('/:userId', (req, res, next) => {
  	User.update(req.body, { 
		  where: { id: req.params.userId },
		  returning:true
		})
    .then(user => res.status(200).json(user))
    .catch(next);
});

users.delete('/:userId', (req, res, next) => {
	User.destroy({
		where: {
			id: req.params.userId
		}
	})
	.then(() => res.status(204).end())
	.catch(next)
})

users.get('/:userId', (req, res, next) => {
  	User.findById(req.params.userId, {
        include: [{ all: true, nested: true }]
    })
    .then(function(user) {
      res.json(user);
    })
    .catch(next);
});

module.exports = users