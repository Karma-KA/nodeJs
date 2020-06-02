"use strict";

var path = require('path');

var express = require('express');

var bodyParser = require('body-parser');

var app = express();
app.set('view engine', 'pug'); // setting pug to be used as template engine

app.set('views', 'views'); // provide the path of views folder

var adminData = require('./routes/admin');

var shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(express["static"](path.join(__dirname, 'public')));
app.use('/admin', adminData.routes);
app.use(shopRoutes);
app.use(function (req, res, next) {
  //res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
  res.status(404).render('404', {
    pageTitle: "Error Page"
  });
});
app.listen(3000);