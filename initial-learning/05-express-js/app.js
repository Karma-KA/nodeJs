const express = require('express');
const bodyParser = require('body-parser'); // used for parsing request page.
const path = require('path');

const app = express();

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({ extended: false })); // internally it is also doing everything done by use function
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes); // it can filter all the routes
app.use(shopRoutes);

app.use((req, res, next) => {
    //res.status(404).send('<h1>Page not found</h1>')
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});

app.listen(3000);