const express = require('express');
const router = express.Router();
const path = require('path');
const rootDir = require('../util/path');

router.get('/add-product', (req, res, next) => {
    //res.status(200).send('<form action="/admin/product" method="post"><input type="text" name="title"><button type="submit">Add Product</button></form');
    res.sendFile(path.join(rootDir, 'views', 'add-product.html')); //'..' is used to got one folder up
});

router.post('/add-product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
});

module.exports = router;