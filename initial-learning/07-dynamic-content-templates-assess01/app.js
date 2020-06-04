const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// Project code starts //

const mainPage = require('./routes/main');
const userPage = require('./routes/user');

app.use('/users',(userPage.routes));
app.use('/',(mainPage.routes));

// Project code ends //

app.use((req, res, next) => {
    res.status(404).render('404',{
        pageTitle: 'Error Page'
    });
});

app.listen(3000);

