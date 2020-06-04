const express = require('express');
const path = require('path');
const rootDir = require('../util/path');

const router = express.Router();

const userData = require('./main');


router.get('/users',(req, res, next) => {
    const usr = userData.users;
    res.status(200).render('user', {
        pageTitle: 'Users',
        users: usr
    });
});

exports.routes= router;
exports.fileName= 'user.js file content';