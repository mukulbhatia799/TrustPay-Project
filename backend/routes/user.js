const express = require('express');
const jwt = require('jsonwebtoken');
const zod = require('zod');

import {User} from '../db.js'

const validate = zod.object({
    username: zod.string(),
    password: zod.string(),
    firstname: zod.string(),
    lastname: zod.string()
})

const router = express.Router();

router.use(express.json());

router.post('/signup', async (req, res) => {
    const {success} = validate.safeParse(req.body);

    if(!success) {
        return res.status(411).json({error: "input is incorrect"});
    }

    // check username exists or not as it should be unique
    const checkUserExists = await User.findOne({
        username: req.body
    })

    if(checkUserExists) {
        return res.status(411).json({error: "username already exists."})
    }

    const user = User.create({
        username: req.body.username,
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        password: req.body.password
    })
    const newuserID = user._id;
    const token = jwt.sign({
        newuserID
    }, JWT_SECRET);

    res.status(200).json({
        message: "User created successfully",
        token: token
    })
})

router.post('/signin', (req, res) => {
    
})

module.exports = router;