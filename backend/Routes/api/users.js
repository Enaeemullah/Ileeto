const express = require('express');
const router = express.Router();
const Users = require('../../Models/Users');

//Code for adding a new todos
router.post('/', async (req, res) => {
    const { username, email, password } = req.body;

    try {
        let user = await Users.findOne({ email })
        if (user) {
            return res.status(400).send('Email is already registered')
        }
        user = new Users({
            username,
            email,
            password
        })
        await user.save();
        res.status(200).send('User Added');

    } catch (error) {
        console.log(error.message);
        res.status(500).send('Server Error');
    }
});

// Code for getting all todos
router.get('/', async (req, res) => {
    try {
        const user = await Users.findOne({ email: req.body.email });
        res.send(user);
    } catch (error) {
        console.log(error.message);
        res.status(500).send('Server Error');
    }
});


// Code for deleting todos
router.delete('/', async (req, res) => {
    const item = req.body.item;
    try {
        await Todos.deleteOne({ item });
        res.send(`Item "${item}" is deleted`)
    } catch (e) {
        console.log(e.message);
        res.status(500).send('Cannot delete due to server error!')
    }
})

// Code for updating todos
router.put('/', async (req, res) => {
    const { item, isCompleted } = req.body;
    try {
        await Todos.findOneAndUpdate({ item }, { isCompleted })
        res.send('Item updated');
    } catch (err) {
        console.log(err.message);
        res.status(500).send('Cannot Edit. Server Error!')
    }
})

module.exports = router;