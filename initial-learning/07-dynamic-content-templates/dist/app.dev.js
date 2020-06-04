"use strict";

var path = require('path');

var express = require('express');

var bodyParser = require('body-parser');

var expressHbs = require('express-handlebars');

var app = express(); //app.engine('hbs', expressHbs({layoutDir: '/views/layouts'}, 'main-layout.hbs')); // this needs to be setup because unlike pug, handlebars is not integrated with express framework
//app.set('view engine', 'hbs'); // setting handlebars to be used as template engine
//app.set('view engine', 'pug'); // setting pug to be used as template engine

app.set('view engine', 'ejs'); // no need to define engine as ejs is integrated with express already like pug

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
    pageTitle: "Error Page",
    path: ''
  });
});
app.listen(3000);