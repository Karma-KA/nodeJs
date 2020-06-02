const http = require('http'); // if ./http is provided then it will look for files locally

const routes = require('./routes');

//const server = http.createServer(routes);
const server = http.createServer(routes.handler);

server.listen(3000);