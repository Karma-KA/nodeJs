const express = require('express');
const app = express();

// app.use((req, res, next) => {
//     console.log('main application');
//     next();
// });

// app.use((req, res, next) => {
//     console.log('sub application');
//     next();
// });

app.use('/users', (req, res, next) => {
    console.log('users application');
    res.send('<h1>You have reached users page</h1>');
});

app.use('/', (req, res, next) => {
    console.log('main application');
    res.send('<h1>Response from application</h1>');
});

app.listen(3000);