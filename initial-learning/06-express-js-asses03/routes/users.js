const express = require('express');
const path = require('path');
const rootDir = require('../util/path');

const router = express.Router();

router.use('/users', (req, res, next) => {
    res.status(200).sendFile(path.join(rootDir, 'views', 'users.html'));
});

module.exports = router;