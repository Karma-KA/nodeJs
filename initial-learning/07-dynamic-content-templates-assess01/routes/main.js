const express = require('express');
const path = require('path');
const rootDir = require('../util/path');

const router = express.Router();

const users = [];

router.get('/', (req, res, next) => {
    res.status(201).render('main', {
        pageTitle: 'Home'
    });
});

router.post('/add-user', (req, res, next) => {
    users.push({ users: req.body.name });
    res.redirect('/users');
});


exports.routes= router;
exports.users= users;
exports.fileName= "main.js file content";
