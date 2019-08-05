// implement your API here
const express = require('express');

const server = express();
server.use(express.json());

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
                res.status(201).json({message : `${newUser.name} added.`});
            })
            .catch(error => {
                res.status(500).json({ message: 'Error adding user.' });
            });
    }
});

server.get('/api/users', (req, res) => [
    Users.find()
        .then(users => {
            res.status(200).json(users);
        })
        .catch(err => {
            res.status(500).json({ message: 'Error getting users' });
        }),
]);

server.get('/api/users/:id', (req, res) => {
    const userID = req.params.id;
    Users.findById(userID)
        .then(user => {
            res.status(200).json(user);
        })
        .catch(err => {
            res.status(500).json({ message: "Can't find user with that id." });
        });
});

server.delete('/api/users/:id', (req, res) => {
    const userID = req.params.id;
    Users.remove(userID).then(res => {
        res.status(200).json({message: `User ${userID} deleted.`})
    }).catch(err => {
        res.status(500).json({message: 'Error deleting user.'})
    })
});

server.put('/api/users/:id', (req, res) => {});

const port = 5000;
server.listen(port, () => console.log(`\nListening on port ${port}\n`));
