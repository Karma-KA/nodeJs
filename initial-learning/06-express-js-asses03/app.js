const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

const mainRouter = require('./routes/main');
const usersRouter = require('./routes/users');

app.use(usersRouter);
app.use((req, res, next) => {
    res.sendFile(path.join(__dirname, 'views', '404.html'));
});
app.use(mainRouter);

app.listen(3000);