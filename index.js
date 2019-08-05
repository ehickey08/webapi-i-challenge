// implement your API here
const express = require('express');
const cors = require('cors');

const server = express();
server.use(express.json());
server.use(cors());

const Users = require('./data/db.js');

server.post('/api/users', (req, res) => {
    const newUser = req.body;
    if (!newUser.name || !newUser.bio) {
        res.status(400).json({
            message: 'Please provide name and bio for the user.',
        });
    } else {
        Users.insert(newUser)
            .then(id => {
                Users.findById(id.id)
                    .then(user => {
                        res.status(201).json(user);
                    })
                    .catch(error => {
                        res.status(500).json({
                            message:
                                'Error occurred after adding user to database.',
                        });
                    });
            })
            .catch(error => {
                res.status(500).json({
                    message:
                        'There was an error while saving the user to the database.',
                });
            });
    }
});

server.get('/api/users', (req, res) => [
    Users.find()
        .then(users => {
            res.status(200).json(users);
        })
        .catch(err => {
            res.status(500).json({
                message: 'The users information could not be retrieved.',
            });
        }),
]);

server.get('/api/users/:id', (req, res) => {
    const userID = req.params.id;
    Users.findById(userID)
        .then(user => {
            if (user) res.status(200).json(user);
            else
                res.status(404).json({
                    message: 'The user with the specified ID does not exist.',
                });
        })
        .catch(err => {
            res.status(500).json({
                message: 'The user information could not be retrieved.',
            });
        });
});

server.delete('/api/users/:id', (req, res) => {
    const userID = req.params.id;
    Users.remove(userID)
        .then(amt => {
            if (amt)
                res.status(200).json({ message: `User ${userID} deleted.` });
            else
                res.status(404).json({
                    message: 'The user with the specified ID does not exist.',
                });
        })
        .catch(err => {
            res.status(500).json({ message: 'Error deleting user.' });
        });
});

server.put('/api/users/:id', (req, res) => {
    const { id } = req.params;
    const changedUser = req.body;
    if (!changedUser.bio || !changedUser.name) {
        res.status(400).json({
            message: 'Please provide name and bio for the user.',
        });
    }
    Users.update(id, changedUser)
        .then(amt => {
            if (amt) {
                Users.findById(id)
                    .then(user => {
                        res.status(200).json(user);
                    })
                    .catch(error => {
                        res.status(500).json({
                            message:
                                'Error retrieving updated user after update occurred.',
                        });
                    });
            } else
                res.status(404).json({
                    message: 'The user with the specified ID does not exist.',
                });
        })
        .catch(error => {
            res.status(500).json({
                message: 'The user information could not be modified.',
            });
        });
});

const port = 5000;
server.listen(port, () => console.log(`\nListening on port ${port}\n`));
